import { SignIn } from '@clerk/nextjs'
import { dark } from '@clerk/themes'

export default function Page() {
  return <div className="flex justify-center items-center p-3">
    <SignIn 
    cappearance={{
        baseTheme: dark,
        variables: { colorPrimary: '#A855F7' },
        // elements: {
        //   card: "bg-black border-2 border-purple-500",
        //   formButtonPrimary: "bg-purple-500 hover:bg-purple-600 border border-purple-500",
        //   footerAction: "text-purple-500 hover:text-purple-400",
        //   footerActionLink: "text-purple-500 hover:text-purple-400",
        //   formResendCodeLink: "text-purple-500 hover:text-purple-400",
        // }
      }}
    />
  </div>
}