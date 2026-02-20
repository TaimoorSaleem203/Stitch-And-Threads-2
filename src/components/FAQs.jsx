import { useState } from "react"


const FAQs = () => {

    const faqs = [
        {
            id: 1,
            question: "What files do you accept?",
            answer:
                "MGO (Magnesium Oxide) is a durable, fire-resistant board used in walls and ceilings. It’s mold-proof, eco-friendly, and ideal for sustainable construction."
        },
        {
            id: 2,
            question: "How fast is your turnaround?",
            answer:
                "MGO (Magnesium Oxide) is a durable, fire-resistant board used in walls and ceilings. It’s mold-proof, eco-friendly, and ideal for sustainable construction."
        },
        {
            id: 3,
            question: "Do you offer revisions?",
            answer:
                "MGO (Magnesium Oxide) is a durable, fire-resistant board used in walls and ceilings. It’s mold-proof, eco-friendly, and ideal for sustainable construction."
        },
        {
            id: 4,
            question: "Can you match exact thread or color codes?",
            answer:
                "MGO (Magnesium Oxide) is a durable, fire-resistant board used in walls and ceilings. It’s mold-proof, eco-friendly, and ideal for sustainable construction."
        },
        {
            id: 5,
            question: "What embroidery formats do you provide?",
            answer:
                "MGO (Magnesium Oxide) is a durable, fire-resistant board used in walls and ceilings. It’s mold-proof, eco-friendly, and ideal for sustainable construction."
        },
        {
            id: 6,
            question: "Do you create patches as well?",
            answer:
                "MGO (Magnesium Oxide) is a durable, fire-resistant board used in walls and ceilings. It’s mold-proof, eco-friendly, and ideal for sustainable construction."
        }
    ];

    const [openIndex, setOpenIndex] = useState(null)

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className='mt-28'>
            <div className='max-w-7xl mx-auto flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-between p-6 md:p-10 lg:p-12'>
                <div className='w-full flex flex-col text-black justify-between min-h-full md:h-[500px]'>
                    <div className='font-bold flex flex-col gap-5'>
                        <h1 className='font-heading text-4xl md:text-5xl lg:text-6xl'>FAQs</h1>
                        <p className='font-body font-medium max-w-xs'>are questions about our products, services, or building solutions? </p>
                    </div>

                    <div className='font-body mr-auto flex flex-col gap-2'>
                        <h6 className='text-xl font-bold max-w-xs'>Still Have A Question ?</h6>
                        <p className="max-w-xs text-side">We’re here to help. Reach out to our team and we’ll get back to you as soon as possible.</p>
                        <button className='bg-text mt-3 text-white p-2 rounded-full text-xl active:scale-95 hover:bg-primary transition-all ease-in-out'>Contact Us</button>
                    </div>
                </div>

                <div className='w-full mx-auto flex flex-col gap-1 font-body'>
                    {(faqs).map((faq, indx) => {
                        const isOpen = openIndex === indx
                        return (
                            <>
                                <div className={`flex flex-col gap-1 py-3 max-w-xl border-t ${(indx == faqs.length - 1) && "border-b"}`}>
                                    <div className='font-medium flex justify-between items-center transition-all'>
                                        <h4 className='text-lg'>{faq.question}</h4>
                                        <button aria-label='open' onClick={() => toggleFAQ(indx)}><i class={`${isOpen ? 'ri-arrow-up-s-line' : 'ri-arrow-down-s-line'} text-lg`}></i></button>
                                    </div>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                                        <p className="text-side pt-3 max-w-lg">{faq.answer}</p>
                                    </div>

                                </div>
                            </>
                        )
                    })}

                </div>

            </div>
        </section>
    )
}

export default FAQs