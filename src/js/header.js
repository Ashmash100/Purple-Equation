export const header = () => {
  return `
  <div
  class="container px-7 mx-auto flex items-center justify-between py-5"
>
  <a href="/">
    <svg
      
      width="140"
      viewBox="0 0 251 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M109.19 38C108.977 38 108.813 37.942 108.697 37.826C108.581 37.6907 108.523 37.5263 108.523 37.333V18.396C108.523 18.1833 108.581 18.019 108.697 17.903C108.813 17.7677 108.977 17.7 109.19 17.7H116.556C117.987 17.7 119.224 17.932 120.268 18.396C121.331 18.86 122.153 19.556 122.733 20.484C123.313 21.3927 123.603 22.5333 123.603 23.906C123.603 25.2787 123.313 26.4193 122.733 27.328C122.153 28.2367 121.331 28.923 120.268 29.387C119.224 29.851 117.987 30.083 116.556 30.083H111.423V37.333C111.423 37.5263 111.355 37.6907 111.22 37.826C111.104 37.942 110.94 38 110.727 38H109.19ZM111.394 27.647H116.411C117.842 27.647 118.915 27.328 119.63 26.69C120.345 26.052 120.703 25.124 120.703 23.906C120.703 22.7073 120.355 21.7793 119.659 21.122C118.963 20.4647 117.88 20.136 116.411 20.136H111.394V27.647ZM134.35 38.29C132.726 38.29 131.325 38 130.145 37.42C128.985 36.84 128.086 35.9603 127.448 34.781C126.83 33.5823 126.52 32.0453 126.52 30.17V18.396C126.52 18.1833 126.578 18.019 126.694 17.903C126.81 17.7677 126.975 17.7 127.187 17.7H128.666C128.879 17.7 129.043 17.7677 129.159 17.903C129.295 18.019 129.362 18.1833 129.362 18.396V30.228C129.362 32.1227 129.807 33.5243 130.696 34.433C131.586 35.3417 132.804 35.796 134.35 35.796C135.878 35.796 137.086 35.3417 137.975 34.433C138.884 33.5243 139.338 32.1227 139.338 30.228V18.396C139.338 18.1833 139.396 18.019 139.512 17.903C139.648 17.7677 139.812 17.7 140.005 17.7H141.513C141.707 17.7 141.861 17.7677 141.977 17.903C142.113 18.019 142.18 18.1833 142.18 18.396V30.17C142.18 32.0453 141.861 33.5823 141.223 34.781C140.605 35.9603 139.715 36.84 138.555 37.42C137.395 38 135.994 38.29 134.35 38.29ZM147.26 38C147.048 38 146.883 37.942 146.767 37.826C146.651 37.6907 146.593 37.5263 146.593 37.333V18.396C146.593 18.1833 146.651 18.019 146.767 17.903C146.883 17.7677 147.048 17.7 147.26 17.7H154.336C156.521 17.7 158.251 18.2123 159.527 19.237C160.803 20.2617 161.441 21.7793 161.441 23.79C161.441 25.2787 161.064 26.4967 160.31 27.444C159.576 28.372 158.57 29.0197 157.294 29.387L161.76 37.101C161.818 37.217 161.847 37.3233 161.847 37.42C161.847 37.5747 161.78 37.71 161.644 37.826C161.528 37.942 161.393 38 161.238 38H159.846C159.518 38 159.276 37.913 159.121 37.739C158.967 37.565 158.831 37.391 158.715 37.217L154.51 29.851H149.435V37.333C149.435 37.5263 149.368 37.6907 149.232 37.826C149.116 37.942 148.952 38 148.739 38H147.26ZM149.435 27.386H154.22C155.67 27.386 156.753 27.0863 157.468 26.487C158.184 25.8683 158.541 24.9597 158.541 23.761C158.541 22.5817 158.184 21.6827 157.468 21.064C156.772 20.4453 155.69 20.136 154.22 20.136H149.435V27.386ZM165.828 38C165.616 38 165.451 37.942 165.335 37.826C165.219 37.6907 165.161 37.5263 165.161 37.333V18.396C165.161 18.1833 165.219 18.019 165.335 17.903C165.451 17.7677 165.616 17.7 165.828 17.7H173.194C174.625 17.7 175.862 17.932 176.906 18.396C177.97 18.86 178.791 19.556 179.371 20.484C179.951 21.3927 180.241 22.5333 180.241 23.906C180.241 25.2787 179.951 26.4193 179.371 27.328C178.791 28.2367 177.97 28.923 176.906 29.387C175.862 29.851 174.625 30.083 173.194 30.083H168.061V37.333C168.061 37.5263 167.994 37.6907 167.858 37.826C167.742 37.942 167.578 38 167.365 38H165.828ZM168.032 27.647H173.049C174.48 27.647 175.553 27.328 176.268 26.69C176.984 26.052 177.341 25.124 177.341 23.906C177.341 22.7073 176.993 21.7793 176.297 21.122C175.601 20.4647 174.519 20.136 173.049 20.136H168.032V27.647ZM184 38C183.787 38 183.623 37.942 183.507 37.826C183.391 37.6907 183.333 37.5263 183.333 37.333V18.367C183.333 18.1737 183.391 18.019 183.507 17.903C183.623 17.7677 183.787 17.7 184 17.7H185.537C185.73 17.7 185.885 17.7677 186.001 17.903C186.117 18.019 186.175 18.1737 186.175 18.367V35.477H195.832C196.044 35.477 196.209 35.5447 196.325 35.68C196.441 35.796 196.499 35.9603 196.499 36.173V37.333C196.499 37.5263 196.441 37.6907 196.325 37.826C196.209 37.942 196.044 38 195.832 38H184ZM199.906 38C199.693 38 199.529 37.942 199.413 37.826C199.297 37.6907 199.239 37.5263 199.239 37.333V18.396C199.239 18.1833 199.297 18.019 199.413 17.903C199.529 17.7677 199.693 17.7 199.906 17.7H211.883C212.095 17.7 212.26 17.7677 212.376 17.903C212.492 18.019 212.55 18.1833 212.55 18.396V19.498C212.55 19.7107 212.492 19.875 212.376 19.991C212.26 20.107 212.095 20.165 211.883 20.165H202.023V26.516H211.245C211.457 26.516 211.622 26.5837 211.738 26.719C211.854 26.835 211.912 26.9993 211.912 27.212V28.285C211.912 28.4783 211.854 28.6427 211.738 28.778C211.622 28.894 211.457 28.952 211.245 28.952H202.023V35.535H212.115C212.327 35.535 212.492 35.593 212.608 35.709C212.724 35.825 212.782 35.9893 212.782 36.202V37.333C212.782 37.5263 212.724 37.6907 212.608 37.826C212.492 37.942 212.327 38 212.115 38H199.906Z"
        fill="black"
      />
      <path
        d="M108.755 70C108.542 70 108.368 69.9323 108.233 69.797C108.098 69.6617 108.03 69.4877 108.03 69.275V50.425C108.03 50.2123 108.098 50.0383 108.233 49.903C108.368 49.7677 108.542 49.7 108.755 49.7H122.298C122.511 49.7 122.685 49.7677 122.82 49.903C122.955 50.0383 123.023 50.2123 123.023 50.425V53.151C123.023 53.3637 122.955 53.5377 122.82 53.673C122.685 53.8083 122.511 53.876 122.298 53.876H113.047V57.791H121.66C121.873 57.791 122.047 57.8683 122.182 58.023C122.317 58.1583 122.385 58.3323 122.385 58.545V61.068C122.385 61.2613 122.317 61.4353 122.182 61.59C122.047 61.7253 121.873 61.793 121.66 61.793H113.047V65.824H122.53C122.743 65.824 122.917 65.8917 123.052 66.027C123.187 66.1623 123.255 66.3363 123.255 66.549V69.275C123.255 69.4877 123.187 69.6617 123.052 69.797C122.917 69.9323 122.743 70 122.53 70H108.755ZM138.881 71.885C138.571 71.885 138.33 71.798 138.156 71.624C138.001 71.4693 137.875 71.334 137.779 71.218L136.793 69.913C136.039 70.1643 135.178 70.29 134.212 70.29C132.433 70.29 130.886 70 129.572 69.42C128.276 68.84 127.252 67.97 126.498 66.81C125.763 65.6307 125.367 64.1613 125.309 62.402C125.289 61.5707 125.28 60.7393 125.28 59.908C125.28 59.0767 125.289 58.2357 125.309 57.385C125.367 55.645 125.773 54.1853 126.527 53.006C127.281 51.8073 128.315 50.9083 129.63 50.309C130.944 49.7097 132.472 49.41 134.212 49.41C135.971 49.41 137.508 49.7097 138.823 50.309C140.137 50.9083 141.172 51.8073 141.926 53.006C142.68 54.1853 143.086 55.645 143.144 57.385C143.182 58.2357 143.202 59.0767 143.202 59.908C143.202 60.7393 143.182 61.5707 143.144 62.402C143.028 64.7993 142.332 66.6553 141.056 67.97L143.173 70.986C143.192 71.0053 143.211 71.044 143.231 71.102C143.25 71.16 143.26 71.218 143.26 71.276C143.279 71.4307 143.231 71.566 143.115 71.682C142.999 71.8173 142.854 71.885 142.68 71.885H138.881ZM134.212 66.114C135.236 66.114 136.068 65.8047 136.706 65.186C137.363 64.5673 137.711 63.5813 137.75 62.228C137.788 61.3773 137.808 60.575 137.808 59.821C137.808 59.067 137.788 58.284 137.75 57.472C137.73 56.5633 137.566 55.8287 137.257 55.268C136.947 54.688 136.532 54.2627 136.01 53.992C135.488 53.7213 134.888 53.586 134.212 53.586C133.554 53.586 132.965 53.7213 132.443 53.992C131.921 54.2627 131.505 54.688 131.196 55.268C130.886 55.8287 130.722 56.5633 130.703 57.472C130.683 58.284 130.674 59.067 130.674 59.821C130.674 60.575 130.683 61.3773 130.703 62.228C130.741 63.5813 131.08 64.5673 131.718 65.186C132.375 65.8047 133.206 66.114 134.212 66.114ZM154.654 70.29C152.914 70.29 151.387 70.0097 150.072 69.449C148.777 68.869 147.771 67.9893 147.056 66.81C146.341 65.6113 145.983 64.0937 145.983 62.257V50.425C145.983 50.2123 146.051 50.0383 146.186 49.903C146.321 49.7677 146.495 49.7 146.708 49.7H150.449C150.662 49.7 150.836 49.7677 150.971 49.903C151.106 50.0383 151.174 50.2123 151.174 50.425V62.228C151.174 63.4847 151.474 64.432 152.073 65.07C152.692 65.6887 153.552 65.998 154.654 65.998C155.737 65.998 156.578 65.6887 157.177 65.07C157.796 64.432 158.105 63.4847 158.105 62.228V50.425C158.105 50.2123 158.173 50.0383 158.308 49.903C158.463 49.7677 158.637 49.7 158.83 49.7H162.6C162.793 49.7 162.958 49.7677 163.093 49.903C163.248 50.0383 163.325 50.2123 163.325 50.425V62.257C163.325 64.0937 162.967 65.6113 162.252 66.81C161.537 67.9893 160.531 68.869 159.236 69.449C157.941 70.0097 156.413 70.29 154.654 70.29ZM165.123 70C164.968 70 164.823 69.942 164.688 69.826C164.572 69.6907 164.514 69.5457 164.514 69.391C164.514 69.2943 164.523 69.2073 164.543 69.13L171.358 50.512C171.416 50.2993 171.532 50.1157 171.706 49.961C171.899 49.787 172.16 49.7 172.489 49.7H176.781C177.109 49.7 177.361 49.787 177.535 49.961C177.728 50.1157 177.854 50.2993 177.912 50.512L184.698 69.13C184.736 69.2073 184.756 69.2943 184.756 69.391C184.756 69.5457 184.688 69.6907 184.553 69.826C184.437 69.942 184.292 70 184.118 70H180.551C180.261 70 180.038 69.9323 179.884 69.797C179.748 69.6423 179.661 69.507 179.623 69.391L178.492 66.433H170.749L169.647 69.391C169.608 69.507 169.521 69.6423 169.386 69.797C169.25 69.9323 169.018 70 168.69 70H165.123ZM171.938 62.257H177.332L174.606 54.601L171.938 62.257ZM189.73 70C189.517 70 189.343 69.9323 189.208 69.797C189.073 69.6617 189.005 69.4877 189.005 69.275V54.253H183.843C183.63 54.253 183.456 54.1853 183.321 54.05C183.186 53.8953 183.118 53.7213 183.118 53.528V50.425C183.118 50.2123 183.186 50.0383 183.321 49.903C183.456 49.7677 183.63 49.7 183.843 49.7H199.445C199.658 49.7 199.832 49.7677 199.967 49.903C200.102 50.0383 200.17 50.2123 200.17 50.425V53.528C200.17 53.7213 200.102 53.8953 199.967 54.05C199.832 54.1853 199.658 54.253 199.445 54.253H194.283V69.275C194.283 69.4877 194.215 69.6617 194.08 69.797C193.945 69.9323 193.771 70 193.558 70H189.73ZM203.096 70C202.883 70 202.709 69.9323 202.574 69.797C202.438 69.6617 202.371 69.4877 202.371 69.275V50.425C202.371 50.2123 202.438 50.0383 202.574 49.903C202.709 49.7677 202.883 49.7 203.096 49.7H206.982C207.194 49.7 207.368 49.7677 207.504 49.903C207.639 50.0383 207.707 50.2123 207.707 50.425V69.275C207.707 69.4877 207.639 69.6617 207.504 69.797C207.368 69.9323 207.194 70 206.982 70H203.096ZM219.632 70.29C217.853 70.29 216.307 70 214.992 69.42C213.677 68.84 212.653 67.97 211.918 66.81C211.183 65.6307 210.777 64.1613 210.7 62.402C210.681 61.5707 210.671 60.7393 210.671 59.908C210.671 59.0767 210.681 58.2357 210.7 57.385C210.777 55.645 211.183 54.1853 211.918 53.006C212.672 51.8073 213.706 50.9083 215.021 50.309C216.336 49.7097 217.873 49.41 219.632 49.41C221.372 49.41 222.899 49.7097 224.214 50.309C225.548 50.9083 226.592 51.8073 227.346 53.006C228.1 54.1853 228.506 55.645 228.564 57.385C228.603 58.2357 228.622 59.0767 228.622 59.908C228.622 60.7393 228.603 61.5707 228.564 62.402C228.487 64.1613 228.081 65.6307 227.346 66.81C226.611 67.97 225.587 68.84 224.272 69.42C222.957 70 221.411 70.29 219.632 70.29ZM219.632 66.114C220.657 66.114 221.488 65.8047 222.126 65.186C222.783 64.5673 223.131 63.5813 223.17 62.228C223.209 61.3773 223.228 60.575 223.228 59.821C223.228 59.067 223.209 58.284 223.17 57.472C223.131 56.5633 222.957 55.8287 222.648 55.268C222.358 54.688 221.952 54.2627 221.43 53.992C220.908 53.7213 220.309 53.586 219.632 53.586C218.975 53.586 218.385 53.7213 217.863 53.992C217.341 54.2627 216.925 54.688 216.616 55.268C216.307 55.8287 216.133 56.5633 216.094 57.472C216.075 58.284 216.065 59.067 216.065 59.821C216.065 60.575 216.075 61.3773 216.094 62.228C216.152 63.5813 216.5 64.5673 217.138 65.186C217.776 65.8047 218.607 66.114 219.632 66.114ZM232.273 70C232.061 70 231.887 69.9323 231.751 69.797C231.616 69.6617 231.548 69.4877 231.548 69.275V50.425C231.548 50.2123 231.616 50.0383 231.751 49.903C231.887 49.7677 232.061 49.7 232.273 49.7H235.347C235.676 49.7 235.908 49.7773 236.043 49.932C236.198 50.0673 236.295 50.1737 236.333 50.251L243.409 61.416V50.425C243.409 50.2123 243.477 50.0383 243.612 49.903C243.748 49.7677 243.922 49.7 244.134 49.7H247.614C247.827 49.7 248.001 49.7677 248.136 49.903C248.272 50.0383 248.339 50.2123 248.339 50.425V69.275C248.339 69.4683 248.272 69.6423 248.136 69.797C248.001 69.9323 247.827 70 247.614 70H244.511C244.202 70 243.97 69.9227 243.815 69.768C243.68 69.6133 243.593 69.507 243.554 69.449L236.478 58.719V69.275C236.478 69.4877 236.411 69.6617 236.275 69.797C236.14 69.9323 235.966 70 235.753 70H232.273Z"
        fill="black"
      />
      <rect width="85.4494" height="85.4494" rx="16" fill="#7F00FF" />
      <rect x="26" y="29" width="34" height="9" rx="2" fill="white" />
      <rect x="26" y="47" width="34" height="9" rx="2" fill="white" />
    </svg>
  </a>
  <nav class="header-nav hidden md:block flex items-center">
    <button data-location="about" class="text-base">About</button>
    <button data-location="services" class="lg:ml-20 md:ml-14 text-base">Services</button>
    <button data-location="team" class="lg:ml-20 md:ml-14 text-base">Team</button>
    <button
      data-location="contact"
      class="lg:ml-20 md:ml-14 border-2 text-base hover:bg-purple-600 hover:text-white transition-all border-black rounded-md py-2 px-6"
      >Let's Talk</button
    >
  </nav>
  <svg
    id="hamburger"
    class="relative z-10 md:hidden cursor-pointer"
    width="35"
    height="35"
    viewBox="0 0 81 81"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2"
      width="77"
      height="77"
      rx="4"
      stroke="black"
      stroke-width="4"
    />
    <line
      x1="17"
      y1="25"
      x2="64"
      y2="25"
      stroke="black"
      stroke-width="4"
    />
    <line
      x1="17"
      y1="41"
      x2="64"
      y2="41"
      stroke="black"
      stroke-width="4"
    />
    <line
      x1="17"
      y1="56"
      x2="64"
      y2="56"
      stroke="black"
      stroke-width="4"
    />
  </svg>
  <svg id="close-icon" class="absolute md:hidden hidden right-7" width="35" height="35" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="77" height="77" rx="4" stroke="black" stroke-width="4"/>
      <line x1="22.362" y1="21.4638" x2="59.5713" y2="59.6034" stroke="black" stroke-width="4"/>
      <line x1="59.5565" y1="22.4324" x2="21.3957" y2="59.6199" stroke="black" stroke-width="4"/>
  </svg>        
</div>
<div id="mobile-menu" class="hidden transition-all md:hidden flex">
  <nav class="relative bg-slate-100 z-20 flex flex-col grow text-2xl text-bold gap-10 pl-7 py-10">
    <button class="text-left" data-location="about">About</button>
    <button class="text-left" data-location="services">Services</button>
    <button class="text-left" data-location="team">Team</button>
    <button
      data-location="contact"
      class="bg-purple-600 flex justify-center border-2  border-black text-xl w-44 rounded-md text-white py-3"
    >
     Let's Talk
    </button>
  </nav>
  <div class="mobile-menu-bg h-screen w-full left-0 absolute top-24 "></div>
</div>
<div
  id="progress-bar"
  class="h-1 w-0 bg-gradient-to-r from-[#fc4a1a] to-[#f7b733]"
></div>
  `;
};