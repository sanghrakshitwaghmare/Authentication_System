export function generateOtp(){
    return Math.floor(10000+Math.random()*900000).toString();
}

export function getOtpHtml(otp){
    return `
        <1Doctype html>
        <html lang="e">
            <head>
            </head>
            <body>
                ${opt}
            </body>
        </html>
        </Doctype html>
    `
}