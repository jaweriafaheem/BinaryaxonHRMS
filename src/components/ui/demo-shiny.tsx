import { ShinyButton } from "./shiny-button";

export default function DemoOne() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <ShinyButton onClick={() => alert("Button clicked!")}>Get unlimited access</ShinyButton>
    </div>
  )
}
