import React from 'react'

const Countries = () => {
    const flags = [
        {
            name: "USA",
            flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAwCAMAAACrB+1LAAAAnFBMVEX///+zGUKxBjvJdYTPh5SxADmzGEGwADf69fbw3eCuAC7drbawADS6PVmyEj8KMWEAJlsAKl05TXIAIlkAHVcALmA8Ll0AGFW6F0Bjb4tQYIAvRm6TmatIWXsADlFveZKqr72do7N/h522usYgPWjl5+vO0dmFj6QeN2QAE1K5ADhBO2XEyNFZaIfv7/LY2uAABE+2ACtHSG1WS28JqJLaAAAC4ElEQVRYhe1X266jOBD03rOzl+626bDY+BgMCeQMJHv5/3/bcvZ1tEKO5mGkKaQSKJJxqtzVjSFSoYL/4fMf31TBkK6e8QbuHFZ6Sw34llpwm97ArmteWJwe96DEm4ngwexCvJjMJMmMTOrN5M7v31bBEOfsRDktysTdsuLe54j7sOxgWjr5+F0dsHPBApNlljxFcLftzLxvnTD7LQkLdl8JyKrNdGlJ3XiCDFBjVdVoOhESs7ASHmoXV7UcVuLIgdbWu+BC4xuw8+0swcVG6ne+Xi9Blad7hNrj09BsEgztTM8q/jS4j9/XwZDrx0aF8yAinCYII36IeAgTlFEZMp/ff6gCNGe3+n5mp3EM0lAYgjgJo9UnkxOc8x+r8J+h1xOkd4Mp+iw48ApNMsMNHHVFhb7/VAUYyoF9xLHmGNfGcgzW4QIHN9vIFn/JnKoAQ7dHKNJeiqH9pWPlfE/gdF+KoZexqT+KbphaFFK/ORJJDxSl+odFmq2PctT5mt0LRSQQt3PqqEFqteufuQXf8tvaUpPfCO+MP9fhaag8jIWhm/HY6WjS86j3OOo7UqsY+teHKhRDV+4QIUitRLj3KYBjiuA17eAXIncep8Ai/RbB+eoZpXTtwPsjoaz8dZHzh1+rYKjZrreSWpcG6mdkl0h3iiq6Qh8hd+/d37/UoXQiiO55Vmp2N7v11jUzrr0Fu/22yvxCcMFQ3e62ZNfT0B5hWwxdnoaOr0Uuibrcc0mtEaHFOxJGJI4eTCNqSl7Y+ZzHwExpsMguX1jiFNGA4uTVsR06Pf9WBxh6vaDvNxPUL5pAezQjpDpSC20ato5o0L9XwahYK4hBG6jwPIMDlbQJVH6gYKV6cXsA/9TK8hWfRGVlHyv/ukg6GFx1YXowcuvawMFmUdnBjrW5Lxd1487BoahuUDs4ztWNmAcH0brh+OAIXTnXHxv+v+KTqPx+PfaRW/fhffDz/LNG7udc/F9u2o6ac1dwHQAAAABJRU5ErkJggg=="
        },
        {
            name: "UK",
            flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAAAuCAMAAACS246gAAAAaVBMVEX////IEC4BIWnGACHejpMAAF8AAF4AIGndiZHLytXHACbDAAAADWPz9fgAAFqGiqfEAAnuysr0293YdHz66uvTYGnSWmQAAFPFABXBwc3QUFzs7/PVZ3B+gqHy1dd5fZ7qwMD78vPbgok7IaQSAAACBklEQVRYhe2Y7XaCMAxAgwhqC8gUPwAV5f0fcpSP0tKkVI/82Vl+bWfJ5baGpg5uB+ijvIfRZoVGuAPY+l4b/hZgF+J5myi8l5DVzPMYPz+A8ZPEx/sEx7vBN1GyjyE7pr5AC6r8ocej9i7wxrpF84aY9sRa/DJnPw8frLku2y0jtdrPwTFrEXf5vBONt8NVtEYB/JmTzbHB1Y9xsn7Qd4uwp+GktZADescUewpuNp8mBi5JBFxKMaLfQC4vGO2NRBROCQVyOwe4xT6IMPggQ1nrcMXeKEim8GTWegqn7aspvCIaQKOtINAjTC5VKQqv15QXDxhDhQMcbrxJUdZXVpcknMBgZ0Sex82h8CPimRHw17P9+/iix3luksA5dPMvx3qAr9+ocY2CdXBWOJeA7xo9u6E7l4C3YPzD/xp80VZc9CVa9PV3jk8OLuLI7ePQnbwvAp51J29GHbnosBjQJzEQeHfLRs0fBU+blGOGDwtkzEl0yjxfFKJjbsg6NyPXT0WWOeaMAY0V4QN6XJ+Y6G0mNaAn1moBebVA7c2rBW1tvxSpW2jYg93a4TqnVk3swUjClmi/iMpK2QDyImpaawlWOGrPpRjo1in6wThc/lF78bXFbj0Ht9gD/syPvnAZ6yd2a/UeHO+3euxSytoNjvUcIzr0AzhiDw+xQx6rs+/9Y2HA334BUwRMUiUc+GcAAAAASUVORK5CYII="
        },
        {
            name: "Europe",
            flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/188px-Flag_of_Europe.svg.png"
        },
        {
            name: "canada",
            flag: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAACCCAMAAACXSEZJAAAAclBMVEX/AAD/////XV3/8vL/xsb/6en/4eH//Pz/9vb/0tL/urr/b2//lJT/tbX/1dX/UFD/paX/LCz/hIT/sLD/Z2f/mJj/2tr/enr/QED/Dw//zc3/kJD/ior/gID/Ghr/dXX/Ojr/SEj/MzP/V1f/n5//IiL1dXcmAAAE50lEQVR4nO2d2WKqMBCGE2RzBSuiWLVY6/u/4imLsoUsRHoyIXNFS/IHv4aYTGZShGRthv+3WdKfwUAwEAwEA8FAMBAMBAPBQDAQFIfgfhoIOELe5CG4CO0nDyH7BJJdATwEN5NYTRzCPdeQ6wrQIcSFxnnSEIJSxJ8whM1TRKorAIcQvFRkugJsCPNK5TJZCLf3yICGcKrLHCYDwWkslo4NHad2x15oDAGjq/26PjV1vipUFtroDCFCKHDL6++WUNkVvDMSnEJCg7DPahzy70O7LbTMS+yyy28RTXAQyk8e/l5uO0q/XWSe5ldfTCHIEJyy0vbnSJBaReVFqDUEzKc51xsC3wOLTaLBQVjxSD6EJOFB6HwnkGypOQSHLSg6LsKDwDUynnSHELAVRSXhQThzSIopAoSwYCtG2kNw2Yo/2kPw2Io2WwU4BExaNDTNYYsAhLCrb7l+MBVrheO7NhCOaFf9sGYJWlVZh6tbgICQbbFUTsOYJVhtz86uXNsyICAss2Kv0Y45Mr54+bnfhe1pUxCCbbd6cLlcePkIUobgs7pXFNw11fy49Qs1ISC0jcJN5RLYlwWfDtYDQ/BZr5xgV/5Gz12cb4Q1poIQvKT4/fGwdvOunDxLln/iHV0vaH+0/EVy7P39WvzcWV4pCAF/Vfeu99W6WjElRdENQaRm5Ui4rKqFYVTzyiadQUJFCP1+k23+jvh0vWJc7J9NdD3RKkKgDP9p/lds77o0LR86PvvvdyfVKkKo9eSO3Rj3UTEu/lDud52wSkKg+REt5kP79KGT4H9UEgL1pbdshlslsPe024T9aiUh4Ihda7ARtiTUhMDhPRpqJK+TmhBm47VGit5QE8KIj/W3rUk91mjvg0VoTFUIo70Pa0AQRnuuP21M9rloUz4J25LaUhWCx3YpDzNiVJuSELzwMVprFxcEhNk+YVeSsChWHoLHcp69wYJYcQgs59k7bOmrDgHH15Eb7MSxKAgB+zxxGMOtG8aiIgSML+O1lhK25dSEMN7AQIzfUBQCy60+1MgJxapCwLMbu6aw9URvKAuhsQfzHtv27dIrDAGH723H6t2eVhlCO79HzihHTSgNATvp21qhZYapDQF7b3K+PwhrRzAQquAEKbvT8x+Uh8AX20+3D3oLACBgt5vxJWad8ByAELAn9ZBJx4cCEgI12oBlNw55GBCGb8ZwJUgCgTDU08KXBwQFwjBPC2d6JBgIAxZUD15lQBC48uDqxp0TBwjCnC3VNNYcCSIEYcdjoh8EjrSftvGmAcGBMGANwZstDAcCeVFdriuu5GkEZ/I8GAid2JWH9blw/WJ5tc6i2MNl2i5DjEsBDKG2E5HcLrvNq9a89jXgu4uVVVt0BmQtsBAKD3y6DNt5MV7HdTaLd5eg2N7nSw6EAsFF1mrhkvzFfk+vd06/7wff6a1QIPRnczm0qSHfcUtQIPSbK31EqwYQ5gLzY20hnKQO4NMEgi16vpaOENY9AcuTghAidJw8hJXw2VIaQsgyoiYPIcsCnTyELEly8hCyE+2lDjHXAUKWFCB6kox2EFJkIORHtVLjUKYAIfOeiJ1Gqh+E3BMvesSWlhCEDi3XEEKeYc/pVdYWQu6KFzyOVDsI+cmEkv8NCzyEfK9a0r8GHsI7zEAwEAwEA8FAMBAMBAPBQBgTwj+NpEpb3oQBFgAAAABJRU5ErkJggg=="
        },
        {
            name: "Australia",
            flag: "data:image/png;base64,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"
        },
    ]
  return (
    <div className='container mx-auto'>
        <div className='mx-7 flex flex-wrap gap-8 justify-center mt-7 '>
            {flags.map((flag) => {
                return (

                <div className=''>
                    <img className=' h-7 w-12' src= {flag.flag} alt= {flag.name} />
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Countries