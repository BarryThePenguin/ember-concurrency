export const INITIAL_STATE = {
  completionState: 0, // TODO: import

  /**
   * If this TaskInstance runs to completion by returning a property
   * other than a rejecting promise, this property will be set
   * with that value.
   *
   * @memberof TaskInstance
   * @instance
   * @readOnly
   */
  value: null,

  /**
   * If this TaskInstance is canceled or throws an error (or yields
   * a promise that rejects), this property will be set with that error.
   * Otherwise, it is null.
   *
   * @memberof TaskInstance
   * @instance
   * @readOnly
   */
  error: null,

  /**
   * True if the task instance is fulfilled.
   *
   * @memberof TaskInstance
   * @instance
   * @readOnly
   */
  isSuccessful: false,

  /**
   * True if the task instance resolves to a rejection.
   *
   * @memberof TaskInstance
   * @instance
   * @readOnly
   */
  isError: false,

  /**
   * True if the task instance is canceled
   *
   * @memberof TaskInstance
   * @instance
   * @readOnly
   */
  isCanceled: false,
  isCanceling: false,

  /**
   * True if the task instance has started, else false.
   *
   * @memberof TaskInstance
   * @instance
   * @readOnly
   */
  hasStarted: false,

  /**
   * True if the task has run to completion.
   *
   * @memberof TaskInstance
   * @instance
   * @readOnly
   */
  isFinished: false,
};