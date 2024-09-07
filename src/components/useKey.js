import { useEffect, useRef } from "react";

export function useKey(key,cb){
    const callbackRef = useRef(cb)
    useEffect(() => {
        callbackRef.current=cb
    })
    useEffect(() => {
        function handle(e){
            if(e.code===key){
                callbackRef.current(e)
            }
        }
        document.addEventListener("keypress",handle)
        return () => document.removeEventListener("keypress",handle)
    },[key])
}