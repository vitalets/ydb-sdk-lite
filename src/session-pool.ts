/**
 * Session pool.
 */
import { Grpc } from './api';
import { Session } from './session';

export class SessionPool {
  private sessions: Session[] = [];

  constructor(private grpc: Grpc, private tablePathPrefix: string) { }

  /**
   * Run function with session, allowing to execute prepared queries.
   */
  async withSession<T>(fn: (session: Session) => T) {
    const session = this.sessions.find(session => !session.isBusy()) || (await this.createSession());
    // It is important to call session.setBusy sinchronously. Otherwise same sesison can be taken.
    session.setBusy(true);
    // todo: handle busy session
    // todo: handle bad session
    // todo: handle expired session
    try {
      return await fn(session);
    } finally {
      session.setBusy(false);
    }
  }

  async destroy() {
    await Promise.all(this.sessions.map(session => this.destroySession(session)));
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
