import { SVGProps } from "react"

const MessageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 458 458"
    style={{
      height: '20px',
      width: '20px',
      fill:'#050505'
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path d="M428 41.533H30c-16.568 0-30 13.431-30 30v252c0 16.568 13.432 30 30 30h132.1l43.942 52.243a30 30 0 0 0 45.918 0l43.942-52.243H428c16.569 0 30-13.432 30-30v-252c0-16.568-13.431-30-30-30zm0 282H281.932L229 386.465l-52.932-62.932H30v-252h398v252z" />
    <path d="M83.379 144.895h292.242c8.284 0 15-6.716 15-15s-6.716-15-15-15H83.379c-8.284 0-15 6.716-15 15s6.716 15 15 15zM83.379 212.675h182.904c8.284 0 15-6.716 15-15s-6.716-15-15-15H83.379c-8.284 0-15 6.716-15 15s6.716 15 15 15zM83.379 280.456h244.623c8.284 0 15-6.716 15-15s-6.716-15-15-15H83.379c-8.284 0-15 6.716-15 15s6.716 15 15 15z" />
  </svg>
)

export default MessageIcon
