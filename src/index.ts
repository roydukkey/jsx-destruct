/**
 * Immediately invokes the provided function for the given context.
 *
 * @param context - The value to forward to the transform function.
 * @param scope - The function which will receive the given context.
 */
export default function <P, F extends (context: P) => JSX.Element> (context: P, scope: F): JSX.Element {
	return scope(context);
}
