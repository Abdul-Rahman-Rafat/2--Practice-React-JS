"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// navigation variable stores the links that appear in the desktop and mobile menus.
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

// TailwindReadyComponents function displays a ready-made responsive Tailwind hero page.
export default function TailwindReadyComponents() {
  // mobileMenuOpen state controls whether the mobile dialog menu is visible.
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // div element wraps the full dark hero page.
    <div className="bg-gray-900">
      {/* header element contains the top navigation bar and mobile menu. */}
      <header className="absolute inset-x-0 top-0 z-50">
        {/* nav element groups the logo, links, and login action. */}
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          {/* div element contains the company logo link. */}
          <div className="flex lg:flex-1">
            {/* a element works as the clickable logo area. */}
            <a href="#" className="-m-1.5 p-1.5">
              {/* span element provides accessible text for screen readers. */}
              <span className="sr-only">Your Company</span>
              {/* img element displays the company logo. */}
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </a>
          </div>
          {/* div element contains the mobile menu open button. */}
          <div className="flex lg:hidden">
            {/* button element opens the mobile navigation dialog. */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              {/* span element provides accessible button text for screen readers. */}
              <span className="sr-only">Open main menu</span>
              {/* Bars3Icon element displays the mobile menu icon. */}
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          {/* div element contains the desktop navigation links. */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm/6 font-semibold text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* div element contains the desktop login link. */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {/* a element displays the desktop login action. */}
            <a href="#" className="text-sm/6 font-semibold text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        {/* Dialog element displays the mobile menu when mobileMenuOpen is true. */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          {/* div element creates the fixed dialog backdrop layer. */}
          <div className="fixed inset-0 z-50" />
          {/* DialogPanel element contains the mobile menu content. */}
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            {/* div element holds the mobile logo and close button row. */}
            <div className="flex items-center justify-between">
              {/* a element works as the logo link inside the mobile menu. */}
              <a href="#" className="-m-1.5 p-1.5">
                {/* span element provides accessible company text. */}
                <span className="sr-only">Your Company</span>
                {/* img element displays the company logo in the mobile menu. */}
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </a>
              {/* button element closes the mobile navigation dialog. */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                {/* span element provides accessible close text for screen readers. */}
                <span className="sr-only">Close menu</span>
                {/* XMarkIcon element displays the close icon. */}
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            {/* div element wraps the mobile menu link groups. */}
            <div className="mt-6 flow-root">
              {/* div element separates the main links from the login link. */}
              <div className="-my-6 divide-y divide-white/10">
                {/* div element contains the mobile navigation links. */}
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                {/* div element contains the mobile login action. */}
                <div className="py-6">
                  {/* a element displays the mobile login link. */}
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-white/5"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* div element wraps the hero content and decorative backgrounds. */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* div element creates the top decorative blurred background shape. */}
        {/* div element creates the bottom decorative blurred background shape. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          {/* div element draws the top gradient shape with a custom clip path. */}
          {/* div element draws the bottom gradient shape with a custom clip path. */}
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>
        {/* div element centers the hero text content. */}
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          {/* div element hides or shows the announcement banner depending on screen size. */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            {/* div element displays the announcement pill. */}
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Announcing our next round of funding.{" "}
              {/* a element links to more information about the announcement. */}
              <a href="#" className="font-semibold text-indigo-400">
                {/* span element stretches the clickable area over the announcement pill. */}
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          {/* div element centers the main hero copy and buttons. */}
          <div className="text-center">
            {/* h1 element displays the main hero headline. */}
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Data to enrich your online business
            </h1>
            {/* p element displays the hero supporting paragraph. */}
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
            </p>
            {/* div element groups the hero call-to-action links. */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* a element displays the primary call-to-action link. */}
              <a
                href="#"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get started
              </a>
              {/* a element displays the secondary call-to-action link. */}
              <a href="#" className="text-sm/6 font-semibold text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>
    </div>
  );
}
