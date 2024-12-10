class error extends Error {
  status: number;
  constructor(message: string = 'Something went wrong', status: number = 500) {
    super(message);
    this.status = status;
  }
}
export default error