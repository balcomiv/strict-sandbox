class Identity {
  private id = 'secret agent';

  sameAs(other: Identity): boolean {
    return this.id.toLowerCase() === other.id.toLowerCase();
  }
}

class MockIdentity {
  //  private id = 'test';  //  Uncomment to see overlapping error

  private constructor() {}

  static create(): Identity {
    return new MockIdentity() as Identity;
  }

  sameAs(other: Identity): boolean {
    return false;
  }
}
