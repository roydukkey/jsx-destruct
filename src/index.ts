/**
 * Immediately invokes the provided function for the given context.
 *
 * @param context - The value to forward to the scope function.
 * @param scope - The function which will receive the given context.
 */
export default function <T> (context: T, scope: (context: T) => JSX.Element): JSX.Element {
	return scope(context);
}
