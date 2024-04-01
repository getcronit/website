
/**
 * Different states of async data
 */
export type AsyncDataState = 'loading' | 'success' | 'error';

/**
 * Data that is loaded asynchronously
 */
export type AsyncData<T> = {
    data: T | null,
    state: AsyncDataState,
}