'use client';

export default function Button({ theme, styled, click, children }) {

    switch (theme) {
        case 'Transparent':
            return <button
                type="submit"
                className="text-white bg-transparent border-[2px] border-gray-100 hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium hover:font-normal rounded-full text-[18px] w-full px-2 py-2 text-center z-20"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
            break
        case 'Primary':
            return <button
                type="submit"
                className="text-white bg-[#38ABD2] border border-gray-100 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[16px] w-full px-2 py-2 text-center z-20"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
            break
        case 'Secondary':
            return <button
                type="submit"
                className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[14px] w-full px-2 py-2 text-center z-20"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>

        case 'Success':
            return <button
                type="submit"
                className="text-white bg-[#32CD32] hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[18px] w-full px-2 py-2 text-center z-20"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
        case 'SuccessBuy':
            return <button
                type="submit"
                className="text-gray-900 font-bold flex justify-center items-center bg-[#32CD32] hover:bg-[#32CD32c4] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-[18px] w-full px-2 py-2 text-center z-20"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {/* <svg className='inline mr-3 h-[30px] w-[30px]' viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.875 29.1125V26.5H11.7875L13.325 23.8875L36.9 21.75L41 7.5H9.48125L7.6875 0.375H0V2.75H5.6375L11.0188 22.7L7.6875 28.875V32.4375C7.6875 34.3375 9.48125 36 11.5312 36C13.5813 36 15.375 34.3375 15.375 32.4375C15.375 30.5375 13.5813 28.875 11.5312 28.875H30.75V32.4375C30.75 34.3375 32.5437 36 34.5938 36C36.6438 36 38.4375 34.3375 38.4375 32.4375C38.4375 30.775 37.4125 29.5875 35.875 29.1125Z" fill="white" />
                </svg> */}
                <span className='inline-block mr-3 h-[35px] w-[35px]  border-4 border-double rounded-full text-[20px] text-gray-900 font-bold border-gray-900'>$</span>
                {children}
            </button>
        case 'SuccessReceta':
            return <button
                type="submit"
                className="text-gray-900 font-bold flex justify-center items-center bg-[#32CD32] hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-[18px] w-full px-2 py-2 text-center z-20"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                <svg className='inline mr-3 h-[35px] w-[35px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C6.46957 0 5.96086 0.210714 5.58579 0.585786C5.21071 0.960859 5 1.46957 5 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0L7 0Z" fill="black" />
                    <path d="M13 20C13.5304 20 14.0391 19.7893 14.4142 19.4142C14.7893 19.0391 15 18.5304 15 18V5C15 4.46957 14.7893 3.96086 14.4142 3.58579C14.0391 3.21071 13.5304 3 13 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H13ZM9 5H13V10H9V5ZM4 5H8V6H4V5ZM4 7H8V8H4V7ZM4 9H8V10H4V9ZM4 11H13V12H4V11ZM4 13H13V14H4V13ZM4 15H13V16H4V15Z" fill="black" />
                </svg>
                {children}
            </button>
        case 'Google':
            return <button
                type="submit"
                className="text-gray-900 flex justify-center items-center bg-white hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-[18px] w-full px-2 py-2 text-center hover:text-white z-20 border-[2px] border-gray-100"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.1716 7.36794H16.5003V7.33335H9.00033V10.6667H13.7099C13.0228 12.6071 11.1766 14 9.00033 14C6.23908 14 4.00033 11.7613 4.00033 9.00002C4.00033 6.23877 6.23908 4.00002 9.00033 4.00002C10.2749 4.00002 11.4345 4.48085 12.3174 5.26627L14.6745 2.90919C13.1862 1.5221 11.1953 0.666687 9.00033 0.666687C4.39824 0.666687 0.666992 4.39794 0.666992 9.00002C0.666992 13.6021 4.39824 17.3334 9.00033 17.3334C13.6024 17.3334 17.3337 13.6021 17.3337 9.00002C17.3337 8.44127 17.2762 7.89585 17.1716 7.36794Z" fill="#FFC107" />
                    <path d="M1.62793 5.12127L4.36585 7.12919C5.10668 5.29502 6.90085 4.00002 9.00043 4.00002C10.275 4.00002 11.4346 4.48085 12.3175 5.26627L14.6746 2.90919C13.1863 1.5221 11.1954 0.666687 9.00043 0.666687C5.7996 0.666687 3.02376 2.47377 1.62793 5.12127Z" fill="#FF3D00" />
                    <path d="M8.9998 17.3333C11.1523 17.3333 13.1081 16.5096 14.5869 15.17L12.0077 12.9875C11.1429 13.6451 10.0862 14.0008 8.9998 14C6.8323 14 4.99189 12.6179 4.29855 10.6891L1.58105 12.7829C2.96022 15.4816 5.76105 17.3333 8.9998 17.3333Z" fill="#4CAF50" />
                    <path d="M17.1712 7.3679H16.5V7.33331H9V10.6666H13.7096C13.3809 11.5902 12.7889 12.3971 12.0067 12.9879L12.0079 12.9871L14.5871 15.1696C14.4046 15.3354 17.3333 13.1666 17.3333 8.99998C17.3333 8.44123 17.2758 7.89581 17.1712 7.3679Z" fill="#1976D2" />
                </svg>
                <span className="pl-5">{children}</span>
                                  
            </button>
        case 'Danger':
            return <button
                type="submit"
                className="text-white bg-red-500 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[14px] w-full px-2 py-2 text-center z-20"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
        case 'Disable':
            return <button
                type="submit"
                className="text-white bg-gray-400  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[14px] w-full px-2 py-2 text-center z-50"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
        case 'MiniPrimary':
            return <button
                type="submit"
                className="relative text-white bg-[#2A52BE] border border-gray-100 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-[16px] w-full px-6 py-2  text-center font-medium z-20"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
            break
        case 'MiniPrimaryComprar':
            return <button
                type="submit"
                className="relative text-white bg-[#38ABD2] border border-gray-100  focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-tl rounded-full text-[14px] w-full px-6 py-3 max-w-[200px]  text-center font-medium z-20"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                <svg className='inline mr-3 h-[18px] w-[18px]' viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M35.875 29.1125V26.5H11.7875L13.325 23.8875L36.9 21.75L41 7.5H9.48125L7.6875 0.375H0V2.75H5.6375L11.0188 22.7L7.6875 28.875V32.4375C7.6875 34.3375 9.48125 36 11.5312 36C13.5813 36 15.375 34.3375 15.375 32.4375C15.375 30.5375 13.5813 28.875 11.5312 28.875H30.75V32.4375C30.75 34.3375 32.5437 36 34.5938 36C36.6438 36 38.4375 34.3375 38.4375 32.4375C38.4375 30.775 37.4125 29.5875 35.875 29.1125Z" fill="white" />
                </svg>
                {children}
            </button>
            break
        case 'MiniPrimaryInfo':
            return <button
                type="submit"
                className="relative text-white bg-[#0064FA] border border-gray-100 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[14px] w-full px-2 py-2  text-center z-20"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                <svg className='inline mr-3 h-[20px] w-[20px]' viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.3 7.29C12.5 7.11 12.74 7 13 7C13.27 7 13.5 7.11 13.71 7.29C13.9 7.5 14 7.74 14 8C14 8.27 13.9 8.5 13.71 8.71C13.5 8.9 13.27 9 13 9C12.74 9 12.5 8.9 12.3 8.71C12.11 8.5 12 8.27 12 8C12 7.74 12.11 7.5 12.3 7.29ZM9.8 11.97C9.8 11.97 11.97 10.25 12.76 10.18C13.5 10.12 13.35 10.97 13.28 11.41L13.27 11.47C13.13 12 12.96 12.64 12.79 13.25C12.41 14.64 12.04 16 12.13 16.25C12.23 16.59 12.85 16.16 13.3 15.86C13.36 15.82 13.41 15.78 13.46 15.75C13.46 15.75 13.54 15.67 13.62 15.78C13.64 15.81 13.66 15.84 13.68 15.86C13.77 16 13.82 16.05 13.7 16.13L13.66 16.15C13.44 16.3 12.5 16.96 12.12 17.2C11.71 17.47 10.14 18.37 10.38 16.62C10.59 15.39 10.87 14.33 11.09 13.5C11.5 12 11.68 11.32 10.76 11.91C10.39 12.13 10.17 12.27 10.04 12.36C9.93 12.44 9.92 12.44 9.85 12.31L9.82 12.25L9.77 12.17C9.7 12.07 9.7 12.06 9.8 11.97ZM22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM20 12C20 7.58 16.42 4 12 4C7.58 4 4 7.58 4 12C4 16.42 7.58 20 12 20C16.42 20 20 16.42 20 12Z" fill="white" />
                </svg>
                {children}
            </button>
            break
        case 'MiniSecondary':
            return <button
                type="submit"
                className="relative text-white bg-violet-700 hover:bg-violet-700 border border-gray-100 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-[16px] w-full px-6 py-2  text-center font-medium z-20"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>

        case 'MiniSuccess':
            return <button
                type="submit"
                className="relative text-white bg-[#2A52BE] border border-gray-100 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-[16px] w-full px-6 py-2  text-center font-medium z-20"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                {children}
            </button>
        case 'MiniSuccessRecetar':
            return <button
                type="submit"
                className="text-white bg-[#32CD32] hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-[16px] w-full px-6 py-2  text-center z-20"
                // className="text-white bg-violet-700 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center 
                // dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={click}
            >
                <svg className='inline mr-3 h-[17px] w-[17px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0C6.46957 0 5.96086 0.210714 5.58579 0.585786C5.21071 0.960859 5 1.46957 5 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V2C18 1.46957 17.7893 0.960859 17.4142 0.585786C17.0391 0.210714 16.5304 0 16 0L7 0Z" fill="white" />
                    <path d="M13 20C13.5304 20 14.0391 19.7893 14.4142 19.4142C14.7893 19.0391 15 18.5304 15 18V5C15 4.46957 14.7893 3.96086 14.4142 3.58579C14.0391 3.21071 13.5304 3 13 3H4C3.46957 3 2.96086 3.21071 2.58579 3.58579C2.21071 3.96086 2 4.46957 2 5V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H13ZM9 5H13V10H9V5ZM4 5H8V6H4V5ZM4 7H8V8H4V7ZM4 9H8V10H4V9ZM4 11H13V12H4V11ZM4 13H13V14H4V13ZM4 15H13V16H4V15Z" fill="white" />
                </svg>
                {children}
            </button>
        default:

    }
}

