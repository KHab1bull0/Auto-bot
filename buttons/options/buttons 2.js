export const option = {
    reply_markup: {
        inline_keyboard: [
            [
                {
                    text: '1', callback_data: '1'
                },
                {
                    text: '2', callback_data: '2'
                },
                {
                    text: '3', callback_data: '3'
                },
            ],
            [
                {
                    text: '4', callback_data: '4'
                },
                {
                    text: '5', callback_data: '5'
                },
                {
                    text: '6', callback_data: '6'
                },
            ],
            [
                {
                    text: '7', callback_data: '7'
                },
                {
                    text: '8', callback_data: '8'
                },
                {
                    text: '9', callback_data: '9'
                },
            ],
            [
                {
                    text: '0', callback_data: '0'
                },
            ]
        ]
    }
}


export const option2 = {
    "reply_markup": {
        inline_keyboard: [
            [
                {
                    text: "Qayta o'ynash", callback_data: '/again'
                },
                {
                    text: "To'xtatish", callback_data: '/stopGame'
                }
            ]
        ]
    }
}


export const mainbuttons = {
    reply_markup: {
        keyboard: [
            [
                {
                    text: "Xizmatlar",
                    callback_data: "/xizmat_lar"
                },
                {
                    text: "Aloqa",
                    callback_data: "/Aloqa_qilish"
                },
            ]
        ]
    }
}

export const contactbtn = {
    reply_markup: {
        keyboard: [
            [
                {
                    text: "contact",
                    request_contact: true
                },
            ]
        ]
    }
}


