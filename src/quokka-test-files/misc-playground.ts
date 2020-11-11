///////////////////////////////////////////////////////
class SomeObject<T> {
  private value?: T;

  getValue(): T | undefined {
    return this.value;
  }
}

const obj = new SomeObject<string>();

const val = obj.getValue();

/////////////////////////////////////////////////////////
