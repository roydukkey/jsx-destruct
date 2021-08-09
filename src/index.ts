/**
 * Immediately invokes the provided function for the given context, when the context is not `null` or `undefined`.
 *
 * @param context - The value to forward to the scope function.
 * @param scope - The function which will receive the given context.
 * @returns When the context is `null` or `undefined`, `undefined` is returned; otherwise, the {@link JSX.Element} received from the scope's invocation is returned.
 */
 export default function <T> (context: T | undefined | null, scope: (context: T) => JSX.Element): JSX.Element | undefined {
	if (context !== null && context !== undefined) {
		return scope(context);
	}
}
