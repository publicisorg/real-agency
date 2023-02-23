
import Marquee from "react-fast-marquee";
import React from 'react';

const Marquecina = () => (
  <div className="py-9">
  <Marquee pauseOnClick={true} pauseOnHover={true} speed={100} gradientColor={[255, 255, 255]}>
    <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" viewBox="0 0 1963.49 35.81" className="h-40 md:h-10">
    <path d="M20.65 16.34c1.47-.76 2.41-1.98 2.41-4.03V9.55c0-2.79-2.26-5.05-5.05-5.05H.36c-.2 0-.36.16-.36.36v22.32c0 .2.16.36.36.36h10.7s.36-.1.16-.31v-7.51l.62.58v6.93c.09.22.45.31.45.31H22.7c.2 0 .36-.16.36-.36v-8.5l-2.41-2.34Zm-8.81-5.62v3.74h-.62v-3.74h.62ZM24.3 27.18c0 .2.16.36.36.36h21.4c.2 0 .36-.16.36-.36v-7.71s-.16-.32-.38-.34h-9.9v-.62h9.9c.22.09.38-.23.38-.23v-4.12s-.16-.36-.38-.32h-9.9v-.62h9.9c.22.08.38-.28.38-.28V4.85c0-.2-.16-.36-.36-.36h-21.4c-.2 0-.36.16-.36.36v22.33ZM66.89 4.78c-.07-.22-.22-.29-.43-.29H51.31c-.18 0-.32.07-.4.29L47.35 18.9v8.28c0 .2.16.36.36.36h10.6s.36-.12.26-.33v-4.65h.62v4.65c-.01.22.35.33.35.33h10.51c.2 0 .36-.16.36-.36V18.9L66.89 4.78Zm-8.32 12.48v-6.54h.62v6.54h-.62ZM89.67 27.54c.2 0 .36-.16.36-.36v-8c0-.2-.16-.36-.36-.36h-6.49V4.85c0-.2-.16-.36-.36-.36h-10.8c-.2 0-.36.16-.36.36v22.33c0 .2.16.36.36.36h17.66ZM503.96 16.36l2.42 2.35v8.52c0 .22-.14.36-.36.36h-10.61c-.22 0-.36-.14-.36-.36V20.3l-.51-.58v7.51c0 .22-.14.36-.36.36h-10.61c-.22 0-.36-.14-.36-.36V4.85c0-.22.14-.36.36-.36h17.76c3.25 0 5.05 1.81 5.05 5.05v2.78c0 2.06-.94 3.29-2.42 4.04Zm-8.92-5.52h-.51v3.68h.51v-3.68ZM507.32 27.23V4.85c0-.22.14-.36.36-.36h21.48c.22 0 .36.14.36.36v8.08c0 .22-.14.36-.36.36h-10.07v.51h10.07c.22 0 .36.14.36.36v4.12c0 .18-.14.32-.36.32h-10.07v.54h10.07c.22 0 .36.14.36.32v7.76c0 .22-.14.36-.36.36h-21.48c-.22 0-.36-.14-.36-.36ZM550.09 4.75l3.54 14.15v8.3c0 .22-.14.36-.36.36h-10.61c-.22 0-.36-.14-.36-.36v-4.55h-.51v4.55c0 .22-.14.36-.36.36h-10.61c-.22 0-.36-.14-.36-.36v-8.3l3.57-14.15c.07-.22.22-.29.4-.29h15.23c.22 0 .36.07.43.29Zm-8.34 12.71h.58l-.07-6.64h-.43l-.07 6.64ZM572.73 27.59h-17.79c-.22 0-.36-.14-.36-.36V4.85c0-.22.14-.36.36-.36h11.05c.22 0 .36.14.36.36v13.94h6.39c.22 0 .36.14.36.36v8.09c0 .22-.14.36-.36.36ZM124.1 8.21v18.53h4.86v.98h-10.73v-.98h4.89V8.21h-4.89v-.98h10.73v.98h-4.86ZM144.05 7.23h.95v20.5h-.77l-8.97-17.95v17.95h-.98V7.23h.8l8.97 17.95V7.23ZM151.3 8.21V17h9.74v.98h-9.74v9.74h-.98V7.23h10.73v.98h-9.74ZM166.36 27.73V7.23h.98v19.51h9.74v.98h-10.73ZM193.13 7.23v15.12c0 1.47-.52 2.74-1.57 3.78-1.04 1.07-2.31 1.6-3.78 1.6s-2.74-.53-3.78-1.6c-1.07-1.04-1.6-2.31-1.6-3.78V7.23h.98v15.12c0 1.21.43 2.24 1.29 3.1.86.86 1.89 1.29 3.1 1.29s2.24-.43 3.1-1.29c.84-.86 1.26-1.89 1.26-3.1V7.23h.98ZM199.43 8.21V17h9.74v.98h-9.74v8.76h9.74v.98h-10.73V7.23h10.73v.98h-9.74ZM224.26 7.23h.95v20.5h-.77l-8.97-17.95v17.95h-.98V7.23h.8l8.97 17.95V7.23ZM232.12 26.13c-1.07-1.04-1.6-2.31-1.6-3.78v-9.74c0-1.47.53-2.75 1.6-3.81s2.3-1.57 3.78-1.57 2.74.52 3.78 1.57c1.04 1.07 1.57 2.34 1.57 3.81h-.95c0-1.21-.43-2.24-1.29-3.1s-1.9-1.29-3.1-1.29-2.24.43-3.1 1.29c-.86.86-1.29 1.89-1.29 3.1v9.74c0 1.21.43 2.24 1.29 3.1.86.86 1.89 1.29 3.1 1.29s2.24-.43 3.1-1.29 1.29-1.89 1.29-3.1h.95c0 1.47-.52 2.74-1.57 3.78-1.04 1.07-2.31 1.6-3.78 1.6s-2.74-.53-3.78-1.6ZM247.55 8.21V17h9.74v.98h-9.74v8.76h9.74v.98h-10.73V7.23h10.73v.98h-9.74ZM273.34 27.05l-.68.68-9.07-9.07v9.07h-.98V7.23h5.38c1.47 0 2.74.52 3.78 1.57 1.04 1.07 1.57 2.34 1.57 3.81s-.52 2.74-1.57 3.78c-1.04 1.07-2.31 1.6-3.78 1.6h-3.72l9.07 9.07ZM263.6 17h4.39c1.21 0 2.24-.43 3.1-1.29.86-.86 1.29-1.89 1.29-3.1s-.43-2.24-1.29-3.1c-.86-.86-1.89-1.29-3.1-1.29h-4.39v8.79Z" className="cls-6"/><text className="cls-7" transform="translate(594.55 27.5)"><tspan x="0" y="0" >E</tspan><tspan x="10.54" y="0" >v</tspan><tspan x="27.72" y="0">e</tspan><tspan x="41" y="0" >n</tspan><tspan x="57.03" y="0">t</tspan></text><path d="M303.26 7.44h.29v6.23h-.23l-2.73-5.46v5.46h-.3V7.44h.24l2.73 5.46V7.44ZM305.47 7.74v2.67h2.96v.3h-2.96v2.66h2.96v.3h-3.26V7.44h3.26v.3h-2.96ZM310.29 13.67h-.24V7.44h.3v5.46l1.34-2.67 1.34 2.67V7.44h.29v6.23h-.23l-1.39-2.79-1.39 2.79ZM320.29 13.18c-.32-.32-.49-.7-.49-1.15V9.07c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48c.32.32.48.71.48 1.16h-.29c0-.37-.13-.68-.39-.94s-.58-.39-.94-.39-.68.13-.94.39-.39.58-.39.94v2.96c0 .37.13.68.39.94s.58.39.94.39.68-.13.94-.39.39-.58.39-.94h.29c0 .45-.16.83-.48 1.15-.32.32-.7.49-1.15.49s-.83-.16-1.15-.49ZM327.47 7.91c.32.32.48.71.48 1.16v2.96c0 .45-.16.83-.48 1.15-.32.32-.7.49-1.15.49s-.83-.16-1.15-.49c-.32-.32-.49-.7-.49-1.15V9.07c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48Zm.19 1.16c0-.37-.13-.68-.39-.94s-.58-.39-.94-.39-.68.13-.94.39-.39.58-.39.94v2.96c0 .37.13.68.39.94s.58.39.94.39.68-.13.94-.39.39-.58.39-.94V9.07ZM329.56 13.67V7.44h.3v5.93h2.96v.3h-3.26ZM334.44 13.67V7.44h.3v5.93h2.96v.3h-3.26ZM339.62 7.74v2.67h2.96v.3h-2.96v2.66h2.96v.3h-3.26V7.44h3.26v.3h-2.96ZM344.68 13.18c-.32-.32-.49-.7-.49-1.15V9.07c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48c.32.32.48.71.48 1.16h-.29c0-.37-.13-.68-.39-.94s-.58-.39-.94-.39-.68.13-.94.39-.39.58-.39.94v2.96c0 .37.13.68.39.94s.58.39.94.39.68-.13.94-.39.39-.58.39-.94h.29c0 .45-.16.83-.48 1.15-.32.32-.7.49-1.15.49s-.83-.16-1.15-.49ZM352.34 7.44v.3h-1.48v5.93h-.3V7.74h-1.49v-.3h3.26ZM355.74 7.74v5.64h1.48v.3h-3.26v-.3h1.49V7.74h-1.49v-.3h3.26v.3h-1.48ZM361.62 7.91c.32.32.48.71.48 1.16v2.96c0 .45-.16.83-.48 1.15-.32.32-.7.49-1.15.49s-.83-.16-1.15-.49c-.32-.32-.49-.7-.49-1.15V9.07c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48Zm.19 1.16c0-.37-.13-.68-.39-.94s-.58-.39-.94-.39-.68.13-.94.39-.39.58-.39.94v2.96c0 .37.13.68.39.94s.58.39.94.39.68-.13.94-.39.39-.58.39-.94V9.07ZM366.68 7.44h.29v6.23h-.23l-2.73-5.46v5.46h-.3V7.44h.24l2.73 5.46V7.44ZM303.29 22.35c.17.27.26.57.26.9 0 .45-.16.83-.48 1.15-.32.32-.7.49-1.15.49h-1.64v-6.23h1.64c.45 0 .83.16 1.15.48.32.32.48.71.48 1.16 0 .32-.09.62-.26.9-.17.26-.4.46-.69.59.29.13.52.32.69.58Zm-2.7-.73h1.34c.37 0 .68-.13.94-.39s.39-.58.39-.94-.13-.68-.39-.94-.58-.39-.94-.39h-1.34v2.67Zm1.34 2.96c.37 0 .68-.13.94-.39s.39-.58.39-.94-.13-.68-.39-.94-.58-.39-.94-.39h-1.34v2.67h1.34ZM305.66 24.41c-.32-.32-.48-.7-.48-1.15h.29c0 .36.13.67.39.93s.58.39.94.39.68-.13.94-.39c.26-.26.39-.57.39-.93s-.13-.69-.39-.95-.58-.39-.94-.39c-.45 0-.83-.16-1.15-.48-.32-.31-.48-.7-.48-1.15s.16-.84.48-1.16c.32-.32.7-.48 1.15-.48s.84.16 1.16.48.48.7.48 1.16h-.3c0-.37-.13-.68-.39-.94-.26-.26-.58-.38-.94-.38s-.68.13-.94.38c-.26.26-.39.58-.39.94s.13.68.39.94.58.39.94.39c.45 0 .84.16 1.16.48.32.32.48.7.48 1.16s-.16.83-.48 1.15c-.32.32-.71.48-1.16.48s-.83-.16-1.15-.48ZM314.93 21.62h3.26v.3h-3.26v-.3ZM327.48 19.13c.32.32.48.7.48 1.16v4.6h-.31v-2.97h-2.66v2.97h-.3v-4.6c0-.46.16-.84.48-1.16.32-.32.7-.48 1.16-.48s.84.16 1.16.48Zm.17 1.16c0-.37-.13-.68-.38-.94-.26-.26-.58-.39-.94-.39s-.68.13-.94.39-.39.58-.39.94v1.34h2.66v-1.34ZM330.05 24.41c-.32-.32-.48-.7-.48-1.15h.29c0 .36.13.67.39.93s.58.39.94.39.68-.13.94-.39c.26-.26.39-.57.39-.93s-.13-.69-.39-.95-.58-.39-.94-.39c-.45 0-.83-.16-1.15-.48-.32-.31-.48-.7-.48-1.15s.16-.84.48-1.16c.32-.32.7-.48 1.15-.48s.84.16 1.16.48c.32.32.48.7.48 1.16h-.3c0-.37-.13-.68-.39-.94-.26-.26-.58-.38-.94-.38s-.68.13-.94.38c-.26.26-.39.58-.39.94s.13.68.39.94.58.39.94.39c.46 0 .84.16 1.16.48s.48.7.48 1.16-.16.83-.48 1.15c-.32.32-.7.48-1.16.48s-.83-.16-1.15-.48ZM425.95 13.67l3.09-4.64c0-.36-.14-.67-.4-.92s-.56-.37-.93-.37-.68.13-.94.39-.39.58-.39.94h-.3c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48c.32.32.48.71.48 1.16v.05l-2.83 4.25h2.83v.3h-3.39ZM433.75 7.91c.32.32.48.7.48 1.16v2.96c0 .33-.09.63-.28.91-.31.49-.76.73-1.35.73-.45 0-.83-.16-1.15-.48-.32-.32-.49-.7-.49-1.16V9.07c0-.32.09-.62.28-.9.32-.49.77-.74 1.36-.74.45 0 .84.16 1.16.48Zm-.15 4.99-2.21-4.41c-.09.19-.13.38-.13.58v2.96c0 .37.13.68.39.94s.58.39.94.39c.39 0 .73-.16 1.01-.47Zm.32-3.83c0-.37-.13-.68-.38-.94-.26-.26-.58-.39-.94-.39-.41 0-.74.16-1.01.47l2.21 4.42c.09-.19.13-.38.13-.59V9.08ZM435.7 13.67l3.09-4.64c0-.36-.14-.67-.4-.92-.25-.25-.56-.37-.92-.37s-.68.13-.94.39-.39.58-.39.94h-.3c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48c.32.32.48.71.48 1.16v.05l-2.83 4.25h2.83v.3h-3.39ZM440.58 13.67l3.09-4.64c0-.36-.14-.67-.4-.92s-.56-.37-.93-.37-.68.13-.94.39-.39.58-.39.94h-.3c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48c.32.32.48.71.48 1.16v.05l-2.83 4.25h2.83v.3h-3.39ZM392.57 19.13c.32.32.48.7.48 1.16v4.6h-.31v-2.97h-2.66v2.97h-.3v-4.6c0-.46.16-.84.48-1.16s.7-.48 1.16-.48.84.16 1.16.48Zm.17 1.16c0-.37-.13-.68-.38-.94-.26-.26-.58-.39-.94-.39s-.68.13-.94.39-.39.58-.39.94v1.34h2.66v-1.34ZM397.91 24.68l-.21.21-2.76-2.76v2.76h-.3v-6.23h1.63c.45 0 .83.16 1.15.48.32.32.48.71.48 1.16s-.16.83-.48 1.15c-.32.32-.7.49-1.15.49h-1.13l2.76 2.76Zm-2.96-3.06h1.34c.37 0 .68-.13.94-.39s.39-.58.39-.94-.13-.68-.39-.94-.58-.39-.94-.39h-1.34v2.67ZM401.16 21.63h1.63v1.63c0 .45-.16.83-.48 1.15-.32.32-.7.49-1.15.49s-.83-.16-1.15-.49c-.32-.32-.49-.7-.49-1.15V20.3c0-.45.16-.83.49-1.16s.7-.48 1.15-.48.83.16 1.15.48c.32.32.48.71.48 1.16h-.29c0-.37-.13-.68-.39-.94-.26-.26-.58-.39-.94-.39s-.68.13-.94.39c-.26.26-.39.58-.39.94v2.96c0 .37.13.68.39.94s.58.39.94.39.68-.13.94-.39.39-.58.39-.94v-1.34h-1.34v-.29ZM405.89 24.59h.3v.3h-.3v-.3ZM711.51 16.34c1.47-.76 2.41-1.98 2.41-4.03V9.55c0-2.79-2.26-5.05-5.05-5.05h-17.64c-.2 0-.36.16-.36.36v22.32c0 .2.16.36.36.36h10.7s.36-.1.16-.31v-7.51l.62.58v6.93c.09.22.45.31.45.31h10.41c.2 0 .36-.16.36-.36v-8.5l-2.41-2.34Zm-8.81-5.62v3.74h-.62v-3.74h.62ZM715.16 27.18c0 .2.16.36.36.36h21.4c.2 0 .36-.16.36-.36v-7.71s-.16-.32-.38-.34H727v-.62h9.9c.22.09.38-.23.38-.23v-4.12s-.16-.36-.38-.32H727v-.62h9.9c.22.08.38-.28.38-.28V4.85c0-.2-.16-.36-.36-.36h-21.4c-.2 0-.36.16-.36.36v22.33ZM757.75 4.78c-.07-.22-.22-.29-.43-.29h-15.15c-.18 0-.32.07-.4.29l-3.56 14.12v8.28c0 .2.16.36.36.36h10.6s.36-.12.26-.33v-4.65h.62v4.65c-.01.22.35.33.35.33h10.51c.2 0 .36-.16.36-.36V18.9l-3.52-14.12Zm-8.32 12.48v-6.54h.62v6.54h-.62ZM780.53 27.54c.2 0 .36-.16.36-.36v-8c0-.2-.16-.36-.36-.36h-6.49V4.85c0-.2-.16-.36-.36-.36h-10.8c-.2 0-.36.16-.36.36v22.33c0 .2.16.36.36.36h17.66ZM1208.1 16.36l2.42 2.35v8.52c0 .22-.14.36-.36.36h-10.61c-.22 0-.36-.14-.36-.36V20.3l-.51-.58v7.51c0 .22-.14.36-.36.36h-10.61c-.22 0-.36-.14-.36-.36V4.85c0-.22.14-.36.36-.36h17.76c3.25 0 5.05 1.81 5.05 5.05v2.78c0 2.06-.94 3.29-2.42 4.04Zm-8.92-5.52h-.51v3.68h.51v-3.68ZM1211.45 27.23V4.85c0-.22.14-.36.36-.36h21.48c.22 0 .36.14.36.36v8.08c0 .22-.14.36-.36.36h-10.07v.51h10.07c.22 0 .36.14.36.36v4.12c0 .18-.14.32-.36.32h-10.07v.54h10.07c.22 0 .36.14.36.32v7.76c0 .22-.14.36-.36.36h-21.48c-.22 0-.36-.14-.36-.36ZM1254.23 4.75l3.54 14.15v8.3c0 .22-.14.36-.36.36h-10.61c-.22 0-.36-.14-.36-.36v-4.55h-.51v4.55c0 .22-.14.36-.36.36h-10.61c-.22 0-.36-.14-.36-.36v-8.3l3.57-14.15c.07-.22.22-.29.4-.29h15.23c.22 0 .36.07.43.29Zm-8.34 12.71h.58l-.07-6.64h-.43l-.07 6.64ZM1276.86 27.59h-17.79c-.22 0-.36-.14-.36-.36V4.85c0-.22.14-.36.36-.36h11.05c.22 0 .36.14.36.36v13.94h6.39c.22 0 .36.14.36.36v8.09c0 .22-.14.36-.36.36ZM818.29 8.8c1.04 1.04 1.57 2.32 1.57 3.81v15.12h-1.01v-9.77h-8.76v9.77h-.98V12.61c0-1.5.52-2.77 1.57-3.81s2.32-1.57 3.81-1.57 2.77.52 3.81 1.57Zm.55 3.81c0-1.21-.42-2.24-1.26-3.1-.86-.86-1.9-1.29-3.1-1.29s-2.24.43-3.1 1.29-1.29 1.89-1.29 3.1V17h8.76v-4.39ZM826.74 26.13c-1.07-1.04-1.6-2.31-1.6-3.78v-9.74c0-1.47.53-2.75 1.6-3.81s2.31-1.57 3.78-1.57 2.74.52 3.78 1.57c1.04 1.07 1.57 2.34 1.57 3.81h-.95c0-1.21-.43-2.24-1.29-3.1-.86-.86-1.89-1.29-3.1-1.29s-2.24.43-3.1 1.29c-.86.86-1.29 1.89-1.29 3.1v9.74c0 1.21.43 2.24 1.29 3.1.86.86 1.89 1.29 3.1 1.29s2.24-.43 3.1-1.29c.86-.86 1.29-1.89 1.29-3.1h.95c0 1.47-.52 2.74-1.57 3.78-1.04 1.07-2.31 1.6-3.78 1.6s-2.74-.53-3.78-1.6ZM851.91 7.23v.98h-4.86v19.52h-.98V8.21h-4.89v-.98h10.73ZM863.09 8.21v18.53h4.86v.98h-10.73v-.98h4.89V8.21h-4.89v-.98h10.73v.98h-4.86ZM878.92 27.73h-.58l-5.07-10.23V7.23h.98v10.14l4.39 8.79 4.39-8.79V7.23h.95l-.03 10.48-5.04 10.02ZM898.49 8.8c1.04 1.04 1.57 2.32 1.57 3.81v15.12h-1.01v-9.77h-8.76v9.77h-.98V12.61c0-1.5.52-2.77 1.57-3.81s2.32-1.57 3.81-1.57 2.77.52 3.81 1.57Zm.55 3.81c0-1.21-.42-2.24-1.26-3.1-.86-.86-1.9-1.29-3.1-1.29s-2.24.43-3.1 1.29-1.29 1.89-1.29 3.1V17h8.76v-4.39ZM916.07 7.23v.98h-4.86v19.52h-.98V8.21h-4.89v-.98h10.73ZM927.26 8.21v18.53h4.86v.98h-10.73v-.98h4.89V8.21h-4.89v-.98h10.73v.98h-4.86ZM946.59 8.8c1.04 1.07 1.57 2.34 1.57 3.81v9.74c0 1.47-.52 2.74-1.57 3.78-1.04 1.07-2.3 1.6-3.78 1.6s-2.73-.53-3.78-1.6c-1.07-1.04-1.6-2.31-1.6-3.78v-9.74c0-1.47.53-2.75 1.6-3.81s2.3-1.57 3.78-1.57 2.74.52 3.78 1.57Zm.61 3.81c0-1.21-.43-2.24-1.29-3.1s-1.9-1.29-3.1-1.29-2.24.43-3.1 1.29-1.29 1.89-1.29 3.1v9.74c0 1.21.43 2.24 1.29 3.1s1.89 1.29 3.1 1.29 2.24-.43 3.1-1.29 1.29-1.89 1.29-3.1v-9.74ZM963.24 7.23h.95v20.5h-.77l-8.97-17.95v17.95h-.98V7.23h.8l8.97 17.95V7.23ZM971.11 26.16c-1.04-1.04-1.57-2.3-1.57-3.78h.95c0 1.19.43 2.21 1.29 3.07s1.9 1.29 3.1 1.29 2.24-.43 3.1-1.29c.86-.84 1.29-1.86 1.29-3.07s-.43-2.25-1.29-3.13c-.86-.86-1.9-1.29-3.1-1.29-1.48 0-2.74-.52-3.78-1.57-1.04-1.02-1.57-2.28-1.57-3.78s.52-2.77 1.57-3.81 2.3-1.57 3.78-1.57 2.77.52 3.81 1.57 1.57 2.32 1.57 3.81h-.98c0-1.21-.43-2.24-1.29-3.1-.86-.84-1.9-1.26-3.1-1.26s-2.24.42-3.1 1.26c-.86.86-1.29 1.89-1.29 3.1s.43 2.24 1.29 3.1c.86.86 1.9 1.29 3.1 1.29 1.5 0 2.77.52 3.81 1.57s1.57 2.32 1.57 3.81-.52 2.74-1.57 3.78-2.32 1.57-3.81 1.57-2.74-.52-3.78-1.57Z" className="cls-6"/><text className="cls-7" transform="translate(1298.69 27.5)"><tspan x="0" y="0">T</tspan><tspan x="12.89" y="0">a</tspan>
    <tspan x="26.93" y="0">l</tspan><tspan x="33.34" y="0">e</tspan><tspan x="46.63" y="0" >n</tspan><tspan x="62.66" y="0">t</tspan></text><path d="M1007.4 7.44h.29v6.23h-.23l-2.73-5.46v5.46h-.3V7.44h.24l2.73 5.46V7.44ZM1009.6 7.74v2.67h2.96v.3h-2.96v2.66h2.96v.3h-3.26V7.44h3.26v.3h-2.96ZM1014.43 13.67h-.24V7.44h.3v5.46l1.34-2.67 1.34 2.67V7.44h.29v6.23h-.23l-1.39-2.79-1.39 2.79ZM1024.43 13.18c-.32-.32-.49-.7-.49-1.15V9.07c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48c.32.32.48.71.48 1.16h-.29c0-.37-.13-.68-.39-.94s-.58-.39-.94-.39-.68.13-.94.39-.39.58-.39.94v2.96c0 .37.13.68.39.94s.58.39.94.39.68-.13.94-.39.39-.58.39-.94h.29c0 .45-.16.83-.48 1.15-.32.32-.7.49-1.15.49s-.83-.16-1.15-.49ZM1031.6 7.91c.32.32.48.71.48 1.16v2.96c0 .45-.16.83-.48 1.15-.32.32-.7.49-1.15.49s-.83-.16-1.15-.49c-.32-.32-.49-.7-.49-1.15V9.07c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48Zm.19 1.16c0-.37-.13-.68-.39-.94s-.58-.39-.94-.39-.68.13-.94.39-.39.58-.39.94v2.96c0 .37.13.68.39.94s.58.39.94.39.68-.13.94-.39.39-.58.39-.94V9.07ZM1033.7 13.67V7.44h.3v5.93h2.96v.3h-3.26ZM1038.58 13.67V7.44h.3v5.93h2.96v.3h-3.26ZM1043.75 7.74v2.67h2.96v.3h-2.96v2.66h2.96v.3h-3.26V7.44h3.26v.3h-2.96ZM1048.82 13.18c-.32-.32-.49-.7-.49-1.15V9.07c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48c.32.32.48.71.48 1.16h-.29c0-.37-.13-.68-.39-.94s-.58-.39-.94-.39-.68.13-.94.39-.39.58-.39.94v2.96c0 .37.13.68.39.94s.58.39.94.39.68-.13.94-.39.39-.58.39-.94h.29c0 .45-.16.83-.48 1.15-.32.32-.7.49-1.15.49s-.83-.16-1.15-.49ZM1056.47 7.44v.3h-1.48v5.93h-.3V7.74h-1.49v-.3h3.26ZM1059.87 7.74v5.64h1.48v.3h-3.26v-.3h1.49V7.74h-1.49v-.3h3.26v.3h-1.48ZM1065.75 7.91c.32.32.48.71.48 1.16v2.96c0 .45-.16.83-.48 1.15-.32.32-.7.49-1.15.49s-.83-.16-1.15-.49c-.32-.32-.49-.7-.49-1.15V9.07c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48Zm.19 1.16c0-.37-.13-.68-.39-.94s-.58-.39-.94-.39-.68.13-.94.39-.39.58-.39.94v2.96c0 .37.13.68.39.94s.58.39.94.39.68-.13.94-.39.39-.58.39-.94V9.07ZM1070.82 7.44h.29v6.23h-.23l-2.73-5.46v5.46h-.3V7.44h.24l2.73 5.46V7.44ZM1007.43 22.35c.17.27.26.57.26.9 0 .45-.16.83-.48 1.15-.32.32-.7.49-1.15.49h-1.64v-6.23h1.64c.45 0 .83.16 1.15.48.32.32.48.71.48 1.16 0 .32-.09.62-.26.9-.17.26-.4.46-.69.59.29.13.52.32.69.58Zm-2.7-.73h1.34c.37 0 .68-.13.94-.39s.39-.58.39-.94-.13-.68-.39-.94-.58-.39-.94-.39h-1.34v2.67Zm1.34 2.96c.37 0 .68-.13.94-.39s.39-.58.39-.94-.13-.68-.39-.94-.58-.39-.94-.39h-1.34v2.67h1.34ZM1009.79 24.41c-.32-.32-.48-.7-.48-1.15h.29c0 .36.13.67.39.93s.58.39.94.39.68-.13.94-.39c.26-.26.39-.57.39-.93s-.13-.69-.39-.95-.58-.39-.94-.39c-.45 0-.83-.16-1.15-.48-.32-.31-.48-.7-.48-1.15s.16-.84.48-1.16c.32-.32.7-.48 1.15-.48s.84.16 1.16.48.48.7.48 1.16h-.3c0-.37-.13-.68-.39-.94-.26-.26-.58-.38-.94-.38s-.68.13-.94.38c-.26.26-.39.58-.39.94s.13.68.39.94.58.39.94.39c.45 0 .84.16 1.16.48.32.32.48.7.48 1.16s-.16.83-.48 1.15c-.32.32-.71.48-1.16.48s-.83-.16-1.15-.48ZM1019.06 21.62h3.26v.3h-3.26v-.3ZM1031.61 19.13c.32.32.48.7.48 1.16v4.6h-.31v-2.97h-2.66v2.97h-.3v-4.6c0-.46.16-.84.48-1.16.32-.32.7-.48 1.16-.48s.84.16 1.16.48Zm.17 1.16c0-.37-.13-.68-.38-.94-.26-.26-.58-.39-.94-.39s-.68.13-.94.39-.39.58-.39.94v1.34h2.66v-1.34ZM1034.18 24.41c-.32-.32-.48-.7-.48-1.15h.29c0 .36.13.67.39.93s.58.39.94.39.68-.13.94-.39c.26-.26.39-.57.39-.93s-.13-.69-.39-.95-.58-.39-.94-.39c-.45 0-.83-.16-1.15-.48-.32-.31-.48-.7-.48-1.15s.16-.84.48-1.16c.32-.32.7-.48 1.15-.48s.84.16 1.16.48c.32.32.48.7.48 1.16h-.3c0-.37-.13-.68-.39-.94-.26-.26-.58-.38-.94-.38s-.68.13-.94.38c-.26.26-.39.58-.39.94s.13.68.39.94.58.39.94.39c.46 0 .84.16 1.16.48s.48.7.48 1.16-.16.83-.48 1.15c-.32.32-.7.48-1.16.48s-.83-.16-1.15-.48ZM1130.08 13.67l3.09-4.64c0-.36-.14-.67-.4-.92-.25-.25-.56-.37-.92-.37s-.68.13-.94.39-.39.58-.39.94h-.3c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48c.32.32.48.71.48 1.16v.05l-2.83 4.25h2.83v.3h-3.39ZM1137.89 7.91c.32.32.48.7.48 1.16v2.96c0 .33-.09.63-.28.91-.31.49-.76.73-1.36.73-.45 0-.83-.16-1.15-.48-.32-.32-.49-.7-.49-1.16V9.07c0-.32.09-.62.28-.9.32-.49.77-.74 1.35-.74.46 0 .84.16 1.16.48Zm-.15 4.99-2.21-4.41c-.09.19-.13.38-.13.58v2.96c0 .37.13.68.39.94s.58.39.94.39c.39 0 .73-.16 1.01-.47Zm.32-3.83c0-.37-.13-.68-.38-.94-.26-.26-.58-.39-.94-.39-.41 0-.74.16-1.01.47l2.21 4.42c.09-.19.13-.38.13-.59V9.08ZM1139.84 13.67l3.09-4.64c0-.36-.14-.67-.4-.92s-.56-.37-.92-.37-.68.13-.94.39-.39.58-.39.94h-.3c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48c.32.32.48.71.48 1.16v.05l-2.83 4.25h2.83v.3h-3.39ZM1144.72 13.67l3.09-4.64c0-.36-.14-.67-.4-.92s-.56-.37-.93-.37-.68.13-.94.39-.39.58-.39.94h-.3c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48c.32.32.48.71.48 1.16v.05l-2.83 4.25h2.83v.3h-3.39ZM1096.7 19.13c.32.32.48.7.48 1.16v4.6h-.31v-2.97h-2.66v2.97h-.3v-4.6c0-.46.16-.84.48-1.16s.7-.48 1.16-.48.84.16 1.16.48Zm.17 1.16c0-.37-.13-.68-.38-.94-.26-.26-.58-.39-.94-.39s-.68.13-.94.39-.39.58-.39.94v1.34h2.66v-1.34ZM1102.05 24.68l-.21.21-2.76-2.76v2.76h-.3v-6.23h1.63c.45 0 .83.16 1.15.48.32.32.48.71.48 1.16s-.16.83-.48 1.15c-.32.32-.7.49-1.15.49h-1.13l2.76 2.76Zm-2.96-3.06h1.34c.37 0 .68-.13.94-.39s.39-.58.39-.94-.13-.68-.39-.94-.58-.39-.94-.39h-1.34v2.67ZM1105.3 21.63h1.63v1.63c0 .45-.16.83-.48 1.15-.32.32-.7.49-1.15.49s-.83-.16-1.15-.49c-.32-.32-.49-.7-.49-1.15V20.3c0-.45.16-.83.49-1.16s.7-.48 1.15-.48.83.16 1.15.48c.32.32.48.71.48 1.16h-.29c0-.37-.13-.68-.39-.94-.26-.26-.58-.39-.94-.39s-.68.13-.94.39c-.26.26-.39.58-.39.94v2.96c0 .37.13.68.39.94s.58.39.94.39.68-.13.94-.39.39-.58.39-.94v-1.34h-1.34v-.29ZM1110.03 24.59h.3v.3h-.3v-.3ZM1415.65 16.34c1.47-.76 2.41-1.98 2.41-4.03V9.55c0-2.79-2.26-5.05-5.05-5.05h-17.64c-.2 0-.36.16-.36.36v22.32c0 .2.16.36.36.36h10.7s.36-.1.16-.31v-7.51l.62.58v6.93c.09.22.45.31.45.31h10.41c.2 0 .36-.16.36-.36v-8.5l-2.41-2.34Zm-8.81-5.62v3.74h-.62v-3.74h.62ZM1419.3 27.18c0 .2.16.36.36.36h21.4c.2 0 .36-.16.36-.36v-7.71s-.16-.32-.38-.34h-9.9v-.62h9.9c.22.09.38-.23.38-.23v-4.12s-.16-.36-.38-.32h-9.9v-.62h9.9c.22.08.38-.28.38-.28V4.85c0-.2-.16-.36-.36-.36h-21.4c-.2 0-.36.16-.36.36v22.33ZM1461.88 4.78c-.07-.22-.22-.29-.43-.29h-15.15c-.18 0-.32.07-.4.29l-3.56 14.12v8.28c0 .2.16.36.36.36h10.6s.36-.12.26-.33v-4.65h.62v4.65c-.01.22.35.33.35.33h10.51c.2 0 .36-.16.36-.36V18.9l-3.52-14.12Zm-8.32 12.48v-6.54h.62v6.54h-.62ZM1484.67 27.54c.2 0 .36-.16.36-.36v-8c0-.2-.16-.36-.36-.36h-6.49V4.85c0-.2-.16-.36-.36-.36h-10.8c-.2 0-.36.16-.36.36v22.33c0 .2.16.36.36.36h17.66ZM1827.48 16.36l2.42 2.35v8.52c0 .22-.14.36-.36.36h-10.61c-.22 0-.36-.14-.36-.36V20.3l-.51-.58v7.51c0 .22-.14.36-.36.36h-10.61c-.22 0-.36-.14-.36-.36V4.85c0-.22.14-.36.36-.36h17.76c3.25 0 5.05 1.81 5.05 5.05v2.78c0 2.06-.94 3.29-2.42 4.04Zm-8.92-5.52h-.51v3.68h.51v-3.68ZM1830.84 27.23V4.85c0-.22.14-.36.36-.36h21.48c.22 0 .36.14.36.36v8.08c0 .22-.14.36-.36.36h-10.07v.51h10.07c.22 0 .36.14.36.36v4.12c0 .18-.14.32-.36.32h-10.07v.54h10.07c.22 0 .36.14.36.32v7.76c0 .22-.14.36-.36.36h-21.48c-.22 0-.36-.14-.36-.36ZM1873.61 4.75l3.54 14.15v8.3c0 .22-.14.36-.36.36h-10.61c-.22 0-.36-.14-.36-.36v-4.55h-.51v4.55c0 .22-.14.36-.36.36h-10.61c-.22 0-.36-.14-.36-.36v-8.3l3.57-14.15c.07-.22.22-.29.4-.29h15.23c.22 0 .36.07.43.29Zm-8.34 12.71h.58l-.07-6.64h-.43l-.07 6.64ZM1896.25 27.59h-17.79c-.22 0-.36-.14-.36-.36V4.85c0-.22.14-.36.36-.36h11.05c.22 0 .36.14.36.36v13.94h6.39c.22 0 .36.14.36.36v8.09c0 .22-.14.36-.36.36ZM1523.1 19.4c.57.9.86 1.88.86 2.95 0 1.47-.52 2.74-1.57 3.78-1.04 1.07-2.3 1.6-3.78 1.6h-5.38V7.23h5.38c1.48 0 2.74.52 3.78 1.57 1.04 1.07 1.57 2.34 1.57 3.81 0 1.07-.29 2.05-.86 2.95-.57.86-1.33 1.51-2.27 1.94.94.43 1.7 1.07 2.27 1.91Zm-8.88-2.4h4.39c1.21 0 2.24-.43 3.1-1.29.86-.86 1.29-1.89 1.29-3.1s-.43-2.24-1.29-3.1c-.86-.86-1.9-1.29-3.1-1.29h-4.39v8.79Zm4.39 9.74c1.21 0 2.24-.43 3.1-1.29.86-.86 1.29-1.89 1.29-3.1s-.43-2.24-1.29-3.1c-.86-.86-1.9-1.29-3.1-1.29h-4.39v8.79h4.39ZM1540 27.05l-.68.68-9.07-9.07v9.07h-.98V7.23h5.38c1.47 0 2.73.52 3.78 1.57 1.04 1.07 1.57 2.34 1.57 3.81s-.52 2.74-1.57 3.78c-1.04 1.07-2.3 1.6-3.78 1.6h-3.72l9.07 9.07ZM1530.26 17h4.39c1.21 0 2.24-.43 3.1-1.29.86-.86 1.29-1.89 1.29-3.1s-.43-2.24-1.29-3.1-1.9-1.29-3.1-1.29h-4.39v8.79ZM1554.51 8.8c1.04 1.04 1.57 2.32 1.57 3.81v15.12h-1.01v-9.77h-8.76v9.77h-.98V12.61c0-1.5.52-2.77 1.57-3.81s2.31-1.57 3.81-1.57 2.77.52 3.81 1.57Zm.55 3.81c0-1.21-.42-2.24-1.26-3.1-.86-.86-1.9-1.29-3.1-1.29s-2.24.43-3.1 1.29-1.29 1.89-1.29 3.1V17h8.76v-4.39ZM1571.13 7.23h.95v20.5h-.77l-8.97-17.95v17.95h-.98V7.23h.8l8.97 17.95V7.23ZM1582.78 7.23c1.47 0 2.73.52 3.78 1.57 1.04 1.07 1.57 2.34 1.57 3.81v9.74c0 1.47-.52 2.74-1.57 3.78-1.04 1.07-2.3 1.6-3.78 1.6h-5.38V7.23h5.38Zm4.39 5.38c0-1.21-.43-2.24-1.29-3.1s-1.9-1.29-3.1-1.29h-4.4v18.52h4.4c1.21 0 2.24-.43 3.1-1.29s1.29-1.89 1.29-3.1v-9.74Z" className="cls-6"/><text className="cls-7" transform="translate(1918.07 27.5)"><tspan x="0" y="0">l</tspan><tspan x="7.72" y="0">i</tspan><tspan x="14.3" y="0" >v</tspan><tspan x="31.48" y="0">e</tspan></text><path d="M1626.78 7.44h.29v6.23h-.23l-2.73-5.46v5.46h-.3V7.44h.24l2.73 5.46V7.44ZM1628.99 7.74v2.67h2.96v.3h-2.96v2.66h2.96v.3h-3.26V7.44h3.26v.3h-2.96ZM1633.81 13.67h-.24V7.44h.3v5.46l1.34-2.67 1.34 2.67V7.44h.29v6.23h-.23l-1.39-2.79-1.39 2.79ZM1643.81 13.18c-.32-.32-.49-.7-.49-1.15V9.07c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48c.32.32.48.71.48 1.16h-.29c0-.37-.13-.68-.39-.94s-.58-.39-.94-.39-.68.13-.94.39-.39.58-.39.94v2.96c0 .37.13.68.39.94s.58.39.94.39.68-.13.94-.39.39-.58.39-.94h.29c0 .45-.16.83-.48 1.15-.32.32-.7.49-1.15.49s-.83-.16-1.15-.49ZM1650.99 7.91c.32.32.48.71.48 1.16v2.96c0 .45-.16.83-.48 1.15-.32.32-.7.49-1.15.49s-.83-.16-1.15-.49c-.32-.32-.49-.7-.49-1.15V9.07c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48Zm.19 1.16c0-.37-.13-.68-.39-.94s-.58-.39-.94-.39-.68.13-.94.39-.39.58-.39.94v2.96c0 .37.13.68.39.94s.58.39.94.39.68-.13.94-.39.39-.58.39-.94V9.07ZM1653.08 13.67V7.44h.3v5.93h2.96v.3h-3.26ZM1657.96 13.67V7.44h.3v5.93h2.96v.3h-3.26ZM1663.14 7.74v2.67h2.96v.3h-2.96v2.66h2.96v.3h-3.26V7.44h3.26v.3h-2.96ZM1668.2 13.18c-.32-.32-.49-.7-.49-1.15V9.07c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48c.32.32.48.71.48 1.16h-.29c0-.37-.13-.68-.39-.94s-.58-.39-.94-.39-.68.13-.94.39-.39.58-.39.94v2.96c0 .37.13.68.39.94s.58.39.94.39.68-.13.94-.39.39-.58.39-.94h.29c0 .45-.16.83-.48 1.15-.32.32-.7.49-1.15.49s-.83-.16-1.15-.49ZM1675.86 7.44v.3h-1.48v5.93h-.3V7.74h-1.49v-.3h3.26ZM1679.26 7.74v5.64h1.48v.3h-3.26v-.3h1.49V7.74h-1.49v-.3h3.26v.3h-1.48ZM1685.14 7.91c.32.32.48.71.48 1.16v2.96c0 .45-.16.83-.48 1.15-.32.32-.7.49-1.15.49s-.83-.16-1.15-.49c-.32-.32-.49-.7-.49-1.15V9.07c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48Zm.19 1.16c0-.37-.13-.68-.39-.94s-.58-.39-.94-.39-.68.13-.94.39-.39.58-.39.94v2.96c0 .37.13.68.39.94s.58.39.94.39.68-.13.94-.39.39-.58.39-.94V9.07ZM1690.2 7.44h.29v6.23h-.23l-2.73-5.46v5.46h-.3V7.44h.24l2.73 5.46V7.44ZM1626.81 22.35c.17.27.26.57.26.9 0 .45-.16.83-.48 1.15-.32.32-.7.49-1.15.49h-1.64v-6.23h1.64c.45 0 .83.16 1.15.48.32.32.48.71.48 1.16 0 .32-.09.62-.26.9-.17.26-.4.46-.69.59.29.13.52.32.69.58Zm-2.7-.73h1.34c.37 0 .68-.13.94-.39s.39-.58.39-.94-.13-.68-.39-.94-.58-.39-.94-.39h-1.34v2.67Zm1.34 2.96c.37 0 .68-.13.94-.39s.39-.58.39-.94-.13-.68-.39-.94-.58-.39-.94-.39h-1.34v2.67h1.34ZM1629.18 24.41c-.32-.32-.48-.7-.48-1.15h.29c0 .36.13.67.39.93s.58.39.94.39.68-.13.94-.39c.26-.26.39-.57.39-.93s-.13-.69-.39-.95-.58-.39-.94-.39c-.45 0-.83-.16-1.15-.48-.32-.31-.48-.7-.48-1.15s.16-.84.48-1.16c.32-.32.7-.48 1.15-.48s.84.16 1.16.48c.32.32.48.7.48 1.16h-.3c0-.37-.13-.68-.39-.94-.26-.26-.58-.38-.94-.38s-.68.13-.94.38c-.26.26-.39.58-.39.94s.13.68.39.94.58.39.94.39c.46 0 .84.16 1.16.48s.48.7.48 1.16-.16.83-.48 1.15c-.32.32-.7.48-1.16.48s-.83-.16-1.15-.48ZM1638.45 21.62h3.26v.3h-3.26v-.3ZM1651 19.13c.32.32.48.7.48 1.16v4.6h-.31v-2.97h-2.66v2.97h-.3v-4.6c0-.46.16-.84.48-1.16.32-.32.7-.48 1.16-.48s.84.16 1.16.48Zm.17 1.16c0-.37-.13-.68-.38-.94-.26-.26-.58-.39-.94-.39s-.68.13-.94.39-.39.58-.39.94v1.34h2.66v-1.34ZM1653.57 24.41c-.32-.32-.48-.7-.48-1.15h.29c0 .36.13.67.39.93s.58.39.94.39.68-.13.94-.39c.26-.26.39-.57.39-.93s-.13-.69-.39-.95-.58-.39-.94-.39c-.45 0-.83-.16-1.15-.48-.32-.31-.48-.7-.48-1.15s.16-.84.48-1.16c.32-.32.7-.48 1.15-.48s.84.16 1.16.48c.32.32.48.7.48 1.16h-.3c0-.37-.13-.68-.39-.94-.26-.26-.58-.38-.94-.38s-.68.13-.94.38c-.26.26-.39.58-.39.94s.13.68.39.94.58.39.94.39c.46 0 .84.16 1.16.48s.48.7.48 1.16-.16.83-.48 1.15c-.32.32-.7.48-1.16.48s-.83-.16-1.15-.48ZM1749.47 13.67l3.09-4.64c0-.36-.14-.67-.4-.92s-.56-.37-.93-.37-.68.13-.94.39c-.26.26-.39.58-.39.94h-.3c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48c.32.32.48.71.48 1.16v.05l-2.83 4.25h2.83v.3h-3.39ZM1757.27 7.91c.32.32.48.7.48 1.16v2.96c0 .33-.09.63-.28.91-.31.49-.76.73-1.35.73-.45 0-.83-.16-1.15-.48-.32-.32-.49-.7-.49-1.16V9.07c0-.32.09-.62.28-.9.32-.49.77-.74 1.36-.74.45 0 .84.16 1.16.48Zm-.15 4.99-2.21-4.41c-.09.19-.13.38-.13.58v2.96c0 .37.13.68.39.94.26.26.58.39.94.39.39 0 .73-.16 1.01-.47Zm.32-3.83c0-.37-.13-.68-.38-.94-.26-.26-.58-.39-.94-.39-.41 0-.74.16-1.01.47l2.21 4.42c.09-.19.13-.38.13-.59V9.08ZM1759.22 13.67l3.09-4.64c0-.36-.14-.67-.4-.92s-.56-.37-.92-.37-.68.13-.94.39-.39.58-.39.94h-.3c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48c.32.32.48.71.48 1.16v.05l-2.83 4.25h2.83v.3h-3.39ZM1764.1 13.67l3.09-4.64c0-.36-.14-.67-.4-.92s-.56-.37-.93-.37-.68.13-.94.39-.39.58-.39.94h-.3c0-.45.16-.83.49-1.16.32-.32.7-.48 1.15-.48s.83.16 1.15.48c.32.32.48.71.48 1.16v.05l-2.83 4.25h2.83v.3h-3.39ZM1716.09 19.13c.32.32.48.7.48 1.16v4.6h-.31v-2.97h-2.66v2.97h-.3v-4.6c0-.46.16-.84.48-1.16s.7-.48 1.16-.48.84.16 1.16.48Zm.17 1.16c0-.37-.13-.68-.38-.94-.26-.26-.58-.39-.94-.39s-.68.13-.94.39-.39.58-.39.94v1.34h2.66v-1.34ZM1721.43 24.68l-.21.21-2.76-2.76v2.76h-.3v-6.23h1.63c.45 0 .83.16 1.15.48.32.32.48.71.48 1.16s-.16.83-.48 1.15c-.32.32-.7.49-1.15.49h-1.13l2.76 2.76Zm-2.96-3.06h1.34c.37 0 .68-.13.94-.39s.39-.58.39-.94-.13-.68-.39-.94-.58-.39-.94-.39h-1.34v2.67ZM1724.68 21.63h1.63v1.63c0 .45-.16.83-.48 1.15-.32.32-.7.49-1.15.49s-.83-.16-1.15-.49c-.32-.32-.49-.7-.49-1.15V20.3c0-.45.16-.83.49-1.16s.7-.48 1.15-.48.83.16 1.15.48c.32.32.48.71.48 1.16h-.29c0-.37-.13-.68-.39-.94-.26-.26-.58-.39-.94-.39s-.68.13-.94.39c-.26.26-.39.58-.39.94v2.96c0 .37.13.68.39.94s.58.39.94.39.68-.13.94-.39.39-.58.39-.94v-1.34h-1.34v-.29ZM1729.41 24.59h.3v.3h-.3v-.3Z" className="cls-6"/></svg>
  </Marquee>
  </div>
);

export default Marquecina;