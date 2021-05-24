/**
 * Session pool.
 */
import { Grpc } from './grpc';
import { Session } from './session';

export class SessionPool {
  private sessions: Session[] = [];

  constructor(private grpc: Grpc, private tablePathPrefix: string) { }

  /**
   * Run function with session, allowing to execute prepared queries.
   */
  async withSession<T>(fn: (session: Session) => T) {
    const session = await this.takeSession();
    session.busy = true;
    try {
      return await fn(session);
    } finally {
      session.busy = false;
    }
  }

  async destroy() {
    await Promise.all(this.sessions.map(session => this.destroySession(session)));
  }

  private async takeSession() {
    return this.sessions.find(session => !session.busy) || (await this.createSession());
  }

  private async createSession() {
    const session = new Session(this.grpc, this.tablePathPrefix);
    await session.init();
    this.sessions.push(session);
    return session;
  }

  private async destroySession(session: Session) {
    this.sessions = this.sessions.filter(s => s !== session);
    await session.destroy();
  }
}