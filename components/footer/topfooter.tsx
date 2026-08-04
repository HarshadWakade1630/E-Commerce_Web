
export default function TFooter() {
    return (
        <>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[40px]">
                <div className="footer-column">
                    <h4 className="text-[14px] mb-[15px] text-white">Company</h4>
                    <a href="/footer/about" className="block text-[#aaa] size-[13px] mb-[8px] no-underline w-max hover:text-[#fff]">About Us</a>
                    <a href="footer/careers" className="block text-[#aaa] size-[13px] mb-[8px] no-underline w-max hover:text-[#fff]">Careers</a>
                    <a href="/footer/team" className="block text-[#aaa] size-[13px] mb-[8px] no-underline w-max hover:text-[#fff]">Team</a>
                </div>

                <div className="footer-column">
                    <h4 className="text-[14px] mb-[15px] text-white">Help</h4>
                    <a href="/footer/support" className="block text-[#aaa] size-[13px] mb-[8px] no-underline w-max hover:text-[#fff]">Support</a>
                    <a href="#" className="block text-[#aaa] size-[13px] mb-[8px] no-underline w-max hover:text-[#fff]">FAQs</a>
                    <a href="/footer/contact" className="block text-[#aaa] size-[13px] mb-[8px] no-underline w-max hover:text-[#fff]">Contact</a>
                </div>

                <div className="footer-column">
                    <h4 className="text-[14px] mb-[15px] text-white">Partner With Us</h4>
                    <a href="#" className="block text-[#aaa] size-[13px] mb-[8px] no-underline w-max hover:text-[#fff]">Provide Service</a>
                    <a href="#" className="block text-[#aaa] size-[13px] mb-[8px] no-underline w-max hover:text-[#fff]">More</a>
                </div>

                <div className="footer-column">
                    <h4 className="text-[14px] mb-[15px] text-white">Legal</h4>
                    <a href="/footer/p_p" className="block text-[#aaa] size-[13px] mb-[8px] no-underline w-max hover:text-[#fff]">Privacy Policy</a>
                    <a href="/footer/terms" className="block text-[#aaa] size-[13px] mb-[8px] no-underline w-max hover:text-[#fff]">Terms</a>
                    <a href="/footer/security" className="block text-[#aaa] size-[13px] mb-[8px] no-underline w-max hover:text-[#fff]">Security</a>
                </div>
            </div>

            <p className="align-center mt-[30px] text-[#777] text-[12px]">© 2026 Batataa. All rights reserved.</p>
        </>
    )
}
