"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
// import { mouseGlow, glowOverlay } from "@/lib/mouseGlow";

const upcomingEvents = [
  {
    number: "01",
    date: "07",
    month: "NOV",
    year: "2026",
    title: "Roadmap to Programming 3.0",
    desc: "Interactive technical bootcamp for all students.",
    status: "Registration Open",
  },
  {
    number: "02",
    date: "18",
    month: "NOV",
    year: "2026",
    title: "Quiz-o-Mania",
    desc: "Compile your thoughts. Execute your answers.",
    status: "Coming Soon",
  },
];

const recentActivity = [
  {
    date: "MAY 2026",
    title: "Code Bites 5.0",
    detail:
      "Successfully organized the 5th edition, challenging over 30 students in advanced algorithmic problem-solving.",
  },
  {
    date: "FEB 2026",
    title: "8th Regional Science Congress",
    detail:
      "Secured the Outstanding Paper Presentation Award for hybrid machine learning frameworks.",
  },
  {
    date: "DEC 2025",
    title: "National Hackathon Finalists",
    detail:
      "Multiple CES groups reached national stages, competing in national hackathon finals.",
  },
];

export default function Upcoming() {
  return (
    <section
      id="upcoming"
      className="
        relative z-10
        min-h-[100svh]
        w-full
        bg-transparent
        px-4
        sm:px-6
        lg:px-8
      "
    >

      {/* ============================================================
          FULL PAGE WRAPPER
      ============================================================ */}

      <div
        className="
          mx-auto
          flex
          min-h-[100svh]
          w-full
          max-w-7xl
          flex-col
          justify-center
          py-16
          sm:py-20
          lg:py-10
        "
      >

        {/* ==========================================================
            HEADER
        =========================================================== */}

        <div className="max-w-4xl">

          <p
            className="
              mb-4
              text-[10px]
              font-medium
              uppercase
              tracking-[3px]
              text-[#7D89B5]
              sm:mb-5
              sm:text-[12px]
              sm:tracking-[4px]
            "
          >
            WHAT&apos;S NEXT
          </p>


          <h2
            className="
              m-0
              text-[48px]
              font-medium
              uppercase
              leading-[0.9]
              tracking-[-1.5px]
              text-[#E8EEFF]
              sm:text-[70px]
              sm:tracking-[-2px]
              lg:text-[86px]
            "
          >
            UPCOMING
            <br />

            <span className="text-[#6FA8FF]">
              EVENTS.
            </span>
          </h2>


          <div
            className="
              mt-6
              h-px
              w-16
              bg-[#B8C5E3]/50
              sm:mt-7
              sm:w-20
            "
          />

        </div>


        {/* ==========================================================
            CONTENT

            LEFT  = TICKETS
            RIGHT = RECENT ACTIVITY
        =========================================================== */}

        <div
          className="
            mt-9
            grid
            grid-cols-1
            gap-8
            sm:mt-11
            sm:gap-10
            lg:grid-cols-[1.16fr_0.84fr]
            lg:gap-12
          "
        >


          {/* ========================================================
              TICKET DISPLAY CONTAINER

              Recolored to sit on the dark page background instead of
              the old light #DCE5F1 wash (which only worked against a
              light backdrop).
          ========================================================= */}

          <div
            className="
              w-full
              rounded-[22px]
              border
              border-white/[0.08]
              bg-white/[0.03]
              p-2.5
              shadow-[0_18px_50px_rgba(0,0,0,0.35)]
              backdrop-blur-sm
              sm:rounded-[24px]
              sm:p-3
            "
          >

            {/* ONLY TWO TICKETS */}

            <div className="space-y-4 sm:space-y-5">

              {upcomingEvents.map((event) => (

                <article
                  key={event.title}
                  className="group relative transition-transform duration-300 hover:-translate-y-1.5"
                  // onMouseMove={mouseGlow}
                  style={{ "--glow-rgb": "232,201,119" } as CSSProperties}
                >

                  {/* ==================================================
                      TICKET
                  =================================================== */}

                  <div
                    className="
                      relative
                      flex
                      min-h-[190px]
                      overflow-hidden
                      rounded-[10px]
                      bg-[#111B25]
                      shadow-[0_10px_25px_rgba(0,0,0,0.2)]
                      transition-all
                      duration-300
                      group-hover:-translate-y-[2px]
                      group-hover:shadow-[0_18px_45px_-18px_rgba(232,201,119,0.4)]
                      sm:min-h-[215px]
                    "
                  >


                    {/* =================================================
                        LEFT HOLES

                        Now genuinely transparent (bg-transparent, no
                        fill color) so the real page background shows
                        through, instead of a hardcoded swatch that
                        only matched one particular backdrop.
                    ================================================== */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -left-[8px]
                        top-[19px]
                        z-30
                        h-[16px]
                        w-[16px]
                        rounded-full
                        bg-transparent
                        shadow-[0_38px_0_0_transparent,0_76px_0_0_transparent,0_114px_0_0_transparent,0_152px_0_0_transparent]
                        sm:-left-[9px]
                        sm:top-[22px]
                        sm:h-[18px]
                        sm:w-[18px]
                        sm:shadow-[0_40px_0_0_transparent,0_80px_0_0_transparent,0_120px_0_0_transparent,0_160px_0_0_transparent]
                      "
                    />


                    {/* =================================================
                        MAIN TICKET
                    ================================================== */}

                    <div
                      className="
                        relative
                        min-w-0
                        flex-1
                        bg-[linear-gradient(135deg,#101820,#17212B)]
                        p-2.5
                        sm:p-3.5
                      "
                    >

                      {/* INNER BORDER */}

                      <div
                        className="
                          relative
                          flex
                          h-full
                          min-h-[165px]
                          flex-col
                          rounded-[8px]
                          border-2
                          border-[#F8EFD7]
                          transition-colors
                          duration-300
                          group-hover:border-[#FFFCF0]
                          px-2.5
                          py-2.5
                          sm:min-h-[187px]
                          sm:px-4
                          sm:py-3
                        "
                      >


                        {/* ============================================
                            TOP ROW
                        ============================================= */}

                        <div className="flex items-center justify-between">

                          <span
                            className="
                              font-mono
                              text-[5px]
                              font-semibold
                              uppercase
                              tracking-[1.8px]
                              text-[#F8EFD7]/55
                              sm:text-[6px]
                              sm:tracking-[2px]
                            "
                          >
                            CES CINEMA
                          </span>


                          {/* STARS */}

                          <div
                            className="
                              text-[9px]
                              leading-none
                              tracking-[2px]
                              text-[#F8EFD7]
                              sm:text-[12px]
                              sm:tracking-[4px]
                            "
                          >
                            ★ ★ ★ ★ ★
                          </div>


                          <span
                            className="
                              font-mono
                              text-[5px]
                              font-semibold
                              tracking-[1px]
                              text-[#F8EFD7]/45
                              sm:text-[6px]
                              sm:tracking-[1.5px]
                            "
                          >
                            {event.number} / 02
                          </span>

                        </div>


                        {/* ============================================
                            MAIN CONTENT
                        ============================================= */}

                        <div
                          className="
                            flex
                            flex-1
                            items-center
                            gap-2
                            sm:gap-4
                          "
                        >


                          {/* ==========================================
                              DATE

                              ALWAYS VISIBLE
                              ======================================== */}

                          <div
                            className="
                              flex
                              w-[36px]
                              shrink-0
                              flex-col
                              items-center
                              justify-center
                              border-r
                              border-dashed
                              border-[#F8EFD7]/25
                              pr-2
                              sm:w-[52px]
                              sm:pr-3
                            "
                          >

                            <span
                              className="
                                font-mono
                                text-[5px]
                                font-semibold
                                uppercase
                                tracking-[1px]
                                text-[#F8EFD7]/55
                                sm:text-[7px]
                                sm:tracking-[1.5px]
                              "
                            >
                              {event.month}
                            </span>


                            <span
                              className="
                                mt-1
                                font-['Bebas_Neue',_Impact,_Haettenschweiler,_sans-serif]
                                text-[23px]
                                font-normal
                                leading-none
                                tracking-[-1px]
                                text-[#F8EFD7]
                                sm:text-[34px]
                              "
                            >
                              {event.date}
                            </span>


                            <span
                              className="
                                mt-1
                                font-mono
                                text-[5px]
                                uppercase
                                tracking-[1px]
                                text-[#F8EFD7]/45
                                sm:text-[6px]
                                sm:tracking-[1.5px]
                              "
                            >
                              {event.year}
                            </span>

                          </div>


                          {/* ==========================================
                              POPCORN

                              Hidden on very small screens only.
                              Date remains visible.
                          =========================================== */}

                          <div
                            className="
                              hidden
                              h-[92px]
                              w-[68px]
                              shrink-0
                              sm:block
                              sm:h-[102px]
                              sm:w-[75px]
                            "
                          >

                            <svg
                              viewBox="0 0 120 150"
                              className="h-full w-full"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >

                              {/* POPCORN */}

                              <g
                                fill="#FFF8DF"
                                stroke="#E4C56A"
                                strokeWidth="2.5"
                              >

                                <path d="M18 53C11 47 15 37 24 36C22 27 32 20 40 26C43 17 56 15 62 24C70 19 82 24 82 34C91 31 101 39 98 49C96 57 87 60 79 56H27C23 57 19 56 18 53Z" />

                                <path d="M40 47C34 39 39 29 48 28C51 19 63 18 68 27C76 22 87 28 87 37C95 38 99 47 94 53C90 58 82 58 76 54H46C43 53 41 51 40 47Z" />

                                <path d="M64 52C60 44 66 35 75 35C78 27 90 28 93 37C101 36 107 44 103 51C100 57 92 59 86 55H70C67 55 65 54 64 52Z" />

                              </g>


                              {/* KERNEL DETAILS */}

                              <g fill="#E6B94F">

                                <circle cx="28" cy="44" r="4" />

                                <circle cx="48" cy="32" r="4" />

                                <circle cx="65" cy="42" r="4" />

                                <circle cx="81" cy="34" r="4" />

                                <circle cx="91" cy="48" r="4" />

                                <circle cx="53" cy="48" r="4" />

                              </g>


                              {/* BUCKET */}

                              <path
                                d="
                                  M23 57
                                  L97 57
                                  L88 133
                                  C87 141 82 146 74 146
                                  H46
                                  C38 146 33 141 32 133
                                  L23 57Z
                                "
                                fill="#FFF8DF"
                                stroke="#F8EFD7"
                                strokeWidth="3"
                              />


                              {/* RED STRIPES */}

                              <path
                                d="
                                  M28 60
                                  H42
                                  L47 143
                                  H41
                                  C36 143 33 139 32 133
                                  L28 60Z
                                "
                                fill="#FF2929"
                              />

                              <path
                                d="
                                  M53 60
                                  H67
                                  V146
                                  H53
                                  V60Z
                                "
                                fill="#FF2929"
                              />

                              <path
                                d="
                                  M78 60
                                  H92
                                  L87 133
                                  C86 140 82 144 77 144
                                  H71
                                  L78 60Z
                                "
                                fill="#FF2929"
                              />


                              {/* TOP EDGE */}

                              <path
                                d="
                                  M22 57
                                  C31 51 89 51 98 57
                                  L96 66
                                  C76 71 44 71 24 66
                                  L22 57Z
                                "
                                fill="#FFF9E8"
                                stroke="#E4C56A"
                                strokeWidth="2"
                              />

                            </svg>

                          </div>


                          {/* ==========================================
                              EVENT INFO
                          =========================================== */}

                          <div className="min-w-0 flex-1">

                            <p
                              className="
                                mb-1
                                font-mono
                                text-[5px]
                                font-semibold
                                uppercase
                                tracking-[1.7px]
                                text-[#6FA8FF]
                                sm:text-[6px]
                                sm:tracking-[2px]
                              "
                            >
                              UPCOMING EVENT
                            </p>


                            {/* ORIGINAL EVENT TITLE */}

                            <h3
                              className="
                                m-0
                                max-w-[390px]
                                font-['Bebas_Neue',_Impact,_Haettenschweiler,_'Arial_Narrow_Bold',_sans-serif]
                                text-[19px]
                                font-normal
                                uppercase
                                leading-[0.98]
                                tracking-[0.2px]
                                text-[#FF2929]
                                sm:text-[30px]
                                sm:tracking-[0.4px]
                              "
                            >
                              {event.title}
                            </h3>


                            {/* DESCRIPTION */}

                            <p
                              className="
                                mt-1.5
                                max-w-[390px]
                                text-[7px]
                                leading-[1.45]
                                text-[#B8C5E3]/70
                                sm:mt-2
                                sm:text-[9px]
                                sm:leading-[1.5]
                              "
                            >
                              {event.desc}
                            </p>


                            {/* STATUS */}

                            <span
                              className="
                                mt-1.5
                                inline-flex
                                border
                                border-[#F8EFD7]/25
                                px-1.5
                                py-0.5
                                font-mono
                                text-[5px]
                                font-semibold
                                uppercase
                                tracking-[1px]
                                text-[#F8EFD7]/70
                                sm:mt-2
                                sm:px-2
                                sm:py-1
                                sm:text-[6px]
                                sm:tracking-[1.4px]
                              "
                            >
                              {event.status}
                            </span>

                          </div>

                        </div>


                        {/* ============================================
                            BOTTOM
                        ============================================= */}

                        <div className="flex items-center gap-2 sm:gap-3">

                          <div className="h-px flex-1 bg-[#F8EFD7]" />


                          <span
                            className="
                              whitespace-nowrap
                              font-['Bebas_Neue',_Impact,_Haettenschweiler,_'Arial_Narrow_Bold',_sans-serif]
                              text-[8px]
                              uppercase
                              tracking-[1.2px]
                              text-[#F8EFD7]
                              sm:text-[10px]
                              sm:tracking-[1.5px]
                            "
                          >
                            COMING SOON
                          </span>


                          <div className="h-px flex-1 bg-[#F8EFD7]" />

                        </div>

                      </div>

                    </div>


                    {/* =================================================
                        BARCODE STUB
                    ================================================== */}

                    <div
                      className="
                        relative
                        w-[50px]
                        shrink-0
                        border-l-[2px]
                        border-dashed
                        border-[#101820]
                        bg-[#F8EFD7]
                        sm:w-[68px]
                      "
                    >

                      {/* CUT-OUT HOLES — transparent, same as the left edge */}

                      <div
                        className="
                          pointer-events-none
                          absolute
                          -left-[8px]
                          top-[19px]
                          z-30
                          h-[16px]
                          w-[16px]
                          rounded-full
                          bg-transparent
                          shadow-[0_38px_0_0_transparent,0_76px_0_0_transparent,0_114px_0_0_transparent,0_152px_0_0_transparent]
                          sm:-left-[9px]
                          sm:top-[22px]
                          sm:h-[18px]
                          sm:w-[18px]
                          sm:shadow-[0_40px_0_0_transparent,0_80px_0_0_transparent,0_120px_0_0_transparent,0_160px_0_0_transparent]
                        "
                      />


                      {/* =================================================
                          BARCODE

                          Horizontal barcode rotated 90 degrees.
                      ================================================== */}

                      <div
                        className="
                          absolute
                          left-1/2
                          top-1/2
                          h-[26px]
                          w-[88px]
                          -translate-x-1/2
                          -translate-y-1/2
                          rotate-90
                          sm:h-[30px]
                          sm:w-[112px]
                        "
                      >

                        <div className="flex h-full w-full items-stretch justify-between">

                          <span className="w-[2px] bg-[#080A12]" />
                          <span className="w-[1px] bg-[#080A12]" />
                          <span className="w-[3px] bg-[#080A12]" />
                          <span className="w-[1px] bg-[#080A12]" />
                          <span className="w-[2px] bg-[#080A12]" />
                          <span className="w-[1px] bg-[#080A12]" />
                          <span className="w-[4px] bg-[#080A12]" />
                          <span className="w-[1px] bg-[#080A12]" />
                          <span className="w-[2px] bg-[#080A12]" />
                          <span className="w-[1px] bg-[#080A12]" />
                          <span className="w-[3px] bg-[#080A12]" />
                          <span className="w-[1px] bg-[#080A12]" />
                          <span className="w-[2px] bg-[#080A12]" />
                          <span className="w-[4px] bg-[#080A12]" />
                          <span className="w-[1px] bg-[#080A12]" />

                        </div>

                      </div>


                      {/* STUB TEXT */}

                      <span
                        className="
                          absolute
                          bottom-2.5
                          left-1/2
                          -translate-x-1/2
                          whitespace-nowrap
                          font-mono
                          text-[4px]
                          font-semibold
                          uppercase
                          tracking-[1px]
                          text-[#4E5872]
                          [writing-mode:vertical-rl]
                          sm:bottom-3
                          sm:text-[5px]
                        "
                      >
                        CES / {event.number}
                      </span>

                    </div>


                    {/* RIGHT CUTOUT — transparent */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-[8px]
                        top-1/2
                        z-30
                        h-[16px]
                        w-[16px]
                        -translate-y-1/2
                        rounded-full
                        bg-transparent
                        sm:-right-[9px]
                        sm:h-[18px]
                        sm:w-[18px]
                      "
                    />

                  </div>


                  {/* LABEL */}

                  <div
                    className="
                      mt-1.5
                      flex
                      justify-between
                      px-1
                    "
                  >

                    <span
                      className="
                        font-mono
                        text-[6px]
                        uppercase
                        tracking-[1.8px]
                        text-[#7180A5]
                      "
                    >
                      CES EVENT TICKET
                    </span>

                    <span
                      className="
                        font-mono
                        text-[6px]
                        uppercase
                        tracking-[1.8px]
                        text-[#7180A5]
                      "
                    >
                      {event.number}
                    </span>

                  </div>

                  {/* Cursor spotlight (warm) */}
                  {/* <div className={glowOverlay} /> */}

                </article>

              ))}

            </div>

          </div>


          {/* ========================================================
              RECENT ACTIVITY

              COMPLETELY SEPARATE FROM TICKET CONTAINER
          ========================================================= */}

          <div
            className="
              lg:border-l
              lg:border-white/[0.08]
              lg:pl-9
            "
          >

            {/* HEADER */}

            <div
              className="
                flex
                items-end
                justify-between
                border-b
                border-white/[0.08]
                pb-3
                sm:pb-4
              "
            >

              <div>

                <p
                  className="
                    mb-1.5
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[2.5px]
                    text-[#7D89B5]
                    sm:text-[10px]
                    sm:tracking-[3px]
                  "
                >
                  RECENT ACTIVITY
                </p>

                <h3
                  className="
                    text-[25px]
                    font-medium
                    uppercase
                    leading-none
                    tracking-[-0.5px]
                    text-[#E8EEFF]
                    sm:text-[32px]
                  "
                >
                  LATEST FROM CES
                </h3>

              </div>


              <span
                className="
                  hidden
                  text-[8px]
                  uppercase
                  tracking-[2px]
                  text-[#6F7DA8]
                  sm:block
                "
              >
                2025 — 2026
              </span>

            </div>


            {/* ACTIVITY ITEMS */}

            <div className="divide-y divide-white/[0.06]">

              {recentActivity.map((activity, index) => (

                <article
                  key={activity.title}
                  className="
                    grid
                    grid-cols-1
                    gap-2.5
                    py-4
                    sm:grid-cols-[70px_1fr_auto]
                    sm:items-start
                    sm:gap-5
                    sm:py-5
                  "
                >

                  {/* DATE */}

                  <p
                    className="
                      text-[8px]
                      font-medium
                      uppercase
                      tracking-[1.8px]
                      text-[#6F7DA8]
                      sm:text-[9px]
                      sm:tracking-[2px]
                    "
                  >
                    {activity.date}
                  </p>


                  {/* CONTENT */}

                  <div className="max-w-xl">

                    <h4
                      className="
                        text-[16px]
                        font-medium
                        uppercase
                        leading-[1.1]
                        tracking-[-0.2px]
                        text-[#E8EEFF]
                        sm:text-[20px]
                      "
                    >
                      {activity.title}
                    </h4>


                    <p
                      className="
                        mt-2
                        text-[11px]
                        leading-[1.55]
                        text-[#8F9CC2]
                        sm:mt-2.5
                        sm:text-[12px]
                        sm:leading-[1.6]
                      "
                    >
                      {activity.detail}
                    </p>

                  </div>


                  {/* INDEX */}

                  <span
                    className="
                      hidden
                      pt-0.5
                      text-[8px]
                      tracking-[1.5px]
                      text-[#6F7DA8]
                      sm:block
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </article>

              ))}

            </div>


            {/* EXPLORE */}

            <div
              className="
                border-t
                border-white/[0.08]
                pt-4
                sm:pt-5
              "
            >

              <Link
                href="/events"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2.5
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[1.8px]
                  text-[#9AA9D6]
                  transition-colors
                  duration-300
                  hover:text-[#E8EEFF]
                  sm:text-[10px]
                  sm:tracking-[2px]
                "
              >

                <span>
                  Explore All Events
                </span>

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                >
                  →
                </span>

              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}