import React from 'react'

export default ({ socialLinks }) => {
    return (
        <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 my-3 my-lg-0">
                        {socialLinks && socialLinks.map(({ imgClass, link }, index) =>
                            <a className="btn btn-dark btn-social mx-2" href={link}><i className={imgClass}></i></a>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    )
}