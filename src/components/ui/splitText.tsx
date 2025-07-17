
import { animate, stagger } from "motion"

import { useEffect, useRef } from "react"

export default function SplitText() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.fonts.ready.then(() => {
            if (!containerRef.current) return

            // Hide the container until the fonts are loaded
            containerRef.current.style.visibility = "visible"

            // Split the text content of the h1 into words and wrap them in spans
            const h1 = containerRef.current.querySelector("h1")!
            const words = Array.from(h1.textContent!.split(" ")).map((word, i) => {
                const span = document.createElement("span")
                span.textContent = word + (i < h1.textContent!.split(" ").length - 1 ? " " : "")
                span.className = "split-word"
                return span
            })

            // Clear the h1 and append the word spans
            h1.innerHTML = ""
            words.forEach((span) => h1.appendChild(span))

            // Animate the words in the h1
            animate(
                words,
                { opacity: [0, 1], y: [10, 0] },
                {
                    type: "spring",
                    duration: 2,
                    bounce: 0,
                    delay: stagger(0.05),
                }
            )
        })
    }, [])

    return (
        <div className="container" ref={containerRef}>
            <h1 className="h1 bg-gradient-to-r from-[#2A99E7] to-[#00DAA7] bg-clip-text text-transparent">
                Level up your animations with the all-in membership
            </h1>
            <Stylesheet />
        </div>
    )
}

function Stylesheet() {
    return (
        <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 420px;
                text-align: left;
                visibility: hidden;
            }

            .split-word {

            }
        `}</style>
    )
}
