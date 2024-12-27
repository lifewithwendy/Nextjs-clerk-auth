import { SignUp } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <SignUp 
        appearance={{
          baseTheme: dark,
          variables: { colorPrimary: '#A855F7' },
        //   elements: {
        //     cardBox: "bg-black border-purple-500",
        //     card: "bg-black border-purple-500",
        //     formButtonPrimary: "bg-purple-500 hover:bg-purple-600 border border-purple-500",
        //     footerAction: "text-purple-500 hover:text-purple-400",
        //     footerActionLink: "text-purple-500 hover:text-purple-400",
        //     formResendCodeLink: "text-purple-500 hover:text-purple-400",
        //     footer: {
        //       backgroundColor: "black",
        //       color: "#A855F7",
        //       "&:hover": {
        //         color: "#9333EA"
        //       }
        //     },
        //     footerText: "text-purple-500"
        //   }
        }}
      />
    </div>
  )
}
