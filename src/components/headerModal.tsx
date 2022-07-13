import React, { Fragment, useState } from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { AiOutlineMenu } from 'react-icons/ai'
import { Dialog, Transition } from '@headlessui/react'

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className={'header-box'}>
        <div className={'header-btn'} onClick={openModal}>
          <AiOutlineMenu />
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="header-modal">
                  <div className={'close'} onClick={closeModal}>
                    <StaticImage
                      className={'button-img'}
                      placeholder="blurred"
                      alt="docs-button"
                      src="../static/images/close.png"
                    />
                  </div>
                  <div className={'page-h5'}>
                    <div className={'header'}>
                      <Link to="/aboutrms/">
                        About RMS<i></i>
                      </Link>
                      <Link to="/support/">
                        How to Support<i></i>
                      </Link>
                      <Link to="/community/">
                        Join the Community<i></i>
                      </Link>
                      <Link to="/about/">
                        About US<i></i>
                      </Link>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
