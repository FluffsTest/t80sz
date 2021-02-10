<script>
    import '../css/bobby.pcss';
</script>
<div id="rainbow-cards">
    <div id="card">
        <svg id="rectcard" preserveAspectRatio="xMin meet" viewBox="0 0 600 800" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="a" x1="91.5%" x2="11.2%" y1="81.9%" y2="18.6%">
                    <stop offset="0%" stop-color="#0BF131"/>
                    <stop offset="25%" stop-color="#4445FF"/>
                    <stop offset="54.6%" stop-color="#C429A9"/>
                    <stop offset="79.1%" stop-color="#F28B27"/>
                    <stop offset="99.9%" stop-color="#FFE500"/>
                </linearGradient>
            </defs>
            <rect height="700" id="cardbase" rx="20" ry="20" stroke="url(#a)" stroke-linecap="round"
                  stroke-width="20" transform="translate(45,55)" width="500"></rect>
        </svg>
    </div>
    <div id="bobby">
        <svg id="base" preserveAspectRatio="xMin meet" viewBox="-50 -35 975 800" xmlns="http://www.w3.org/2000/svg">
            <defs/>
            <defs>
                <linearGradient id="sa" x1="4%" x2="169.6%" y1="46.9%" y2="62.9%">
                    <stop offset="0%" stop-color="#F88"/>
                    <stop offset="100%" stop-color="#E15959"/>
                </linearGradient>
                <linearGradient id="c" x1="91.5%" x2="11.2%" y1="52.7%" y2="47.4%">
                    <stop offset="0%" stop-color="#0BF131"/>
                    <stop offset="25%" stop-color="#4445FF"/>
                    <stop offset="54.6%" stop-color="#C429A9"/>
                    <stop offset="86.8%" stop-color="#F28B27"/>
                    <stop offset="99.9%" stop-color="#FFE500"/>
                </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd" transform="translate(120 275)">
                <circle cx="203.5" cy="32.5" fill="#FFF" r="22"/>
                <circle cx="458.5" cy="32.5" fill="#FFF" r="22"/>
                <path d="M294.8 120.4c5.9 18.8 17.6 28.2 35 28.2s29.8-9.4 37-28.2" stroke="#FFF" stroke-linecap="round" stroke-linejoin="round"
                      stroke-width="5"/>
                <rect fill="url(#sa)" height="45" rx="22.5" width="181" y="63"/>
                <rect fill="url(#sa)" height="45" rx="22.5" width="181" x="481" y="63"/>
            </g>
            <g fill="none" fill-rule="evenodd" stroke-linejoin="round">
                <circle cx="446" cy="357" r="357" stroke="url(#a)" stroke-width="25"/>
                <g stroke-linecap="round">
                    <path d="M68 233c-75 5-88 36-38 90 99 109 509 238 803 127 80-32 83-71 8-115"
                          id="arc" stroke="url(#c)"
                          stroke-width="30" xmlns="http://www.w3.org/2000/svg"/>
                </g>
            </g>
        </svg>
    </div>
</div>
