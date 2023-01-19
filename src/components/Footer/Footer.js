const Footer = () => {
    return (
        <div className="rounded-t-[2.25rem] bg-[#0f0f0f] h-[544px] text-[#F2F2F2] font-gt-walsheim-pro">
            <div className=" relative pt-8 pl-[2.12rem]">
            <img
          src="/assets/Images/logo.svg"
          className="h-10  "
          alt=""
        />
            </div>
            <div className="grid grid-cols-2 ml-[2.12rem] mr-4">
                <div className="flex flex-col gap-4">
                    <h4 className="mb-4 text-base font-medium text-white">Policies</h4>
                    <span>Privacy Policy</span>
                    <span>Terms and conditions</span>
                    <span>Help Center</span>
                    <span>Security</span>


                    </div>
                <div className="flex flex-col gap-4">
                    <h4 className="mb-4">Say Hello Us</h4>
                    <span>+44 345 678 903</span>
                    <span>Hi@Paramountstudent.com</span>
                    <span>Fulya, Fulya, Fulya Mahallesi Yeşilçimen Sokak Polat Tower Bağımsız Bölüm 12/430, 34394 Şişli/İstanbul, Turkey</span>
                    


                    </div>
                </div>
        </div>
    );
}

export default Footer;