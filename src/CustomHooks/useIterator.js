import { useCallback, useMemo, useState } from "react";

export default function useIterator({ items = [], initialIndex = 0 }) {
    const [index, setIndex] = useState(initialIndex);

    const next = useCallback(() => {
        if (index == items.length - 1) return setIndex(0)
        setIndex(index + 1);
    }, [index])

    const prev = useCallback(() => {
        if (index == 0) return setIndex(items.length - 1)
        setIndex(index - 1)
    }, [index])

    const item = useMemo(() => items[i], [i])

    return [item || items[0], prev, next]
}