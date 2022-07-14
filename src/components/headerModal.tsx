import React, { Fragment, useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { AiOutlineMenu } from 'react-icons/ai'
import { Dialog, Transition } from '@headlessui/react'

export default function MyModal() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  return (
    <div className={'header-modal'}>
      <div className={'header-box'}>
        <div className={'header-btn'} onClick={() => setMobileSidebarOpen(true)}>
          <AiOutlineMenu />
        </div>
        <div className={'page-h5'}>
          <StaticImage
            className={'logo-img'}
            placeholder="blurred"
            alt="docs-button"
            src="../static/images/logo-h5.png"
          />
        </div>
        <div className={'page-pc'}>
          <StaticImage
            className={'logo-img'}
            placeholder="blurred"
            alt="docs-button"
            src="../static/images/logo-modal.png"
          />
        </div>
      </div>
      <Transition.Root show={mobileSidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 z-40 flex lg:hidden"
          open={mobileSidebarOpen}
          onClose={setMobileSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="overlay" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div id="mobile-sidebar">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-200"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-14 pt-2">
                  <button
                    className="ml-2 flex items-center justify-center bg-black bg-opacity-0 focus:outline-none dark:bg-opacity-0"
                    onClick={() => setMobileSidebarOpen(false)}
                  >
                    {/* <XIcon className="h-10 w-10 text-white" /> */}
                  </button>
                </div>
              </Transition.Child>

              <nav>
                <div className={'close-box-modal'} onClick={() => setMobileSidebarOpen(false)}>
                  {/* <SiteNavMenu /> */}
                  <div className={'close'} onClick={() => setMobileSidebarOpen(false)}>
                    <StaticImage
                      className={'button-img'}
                      placeholder="blurred"
                      alt="docs-button"
                      src="../static/images/close.png"
                    />
                    <StaticImage
                      className={'logo-modal'}
                      placeholder="blurred"
                      alt="logo-modal"
                      src="../static/images/logo-modal.png"
                    />
                  </div>
                  <div className={'page-h5'}>
                    <div className={'header'}>
                      <Link to="/">Home</Link>
                      <Link to="/aboutrms/">About RMS</Link>
                      <Link to="/support/">How to Support</Link>
                      <Link to="/community/">Join the Community</Link>
                      <Link to="/about/">About US</Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </Transition.Child>
          <div className="w-14 flex-shrink-0" aria-hidden="true">
            {/* Dummy element */}
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
