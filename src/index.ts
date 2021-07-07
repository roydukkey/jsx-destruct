/**
 * Immediately invokes the provided function for the given context.
 *
 * @param context - The value to forward to the transform function.
 * @param scope - The function which will receive the given context.
 */
export default function <C, S extends (context: C) => JSX.Element> (context: C, scope: S): JSX.Element {
	return scope(context);
}