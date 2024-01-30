import { cubicBezier, motion } from 'framer-motion'

function NotFound() {
  return (
    <div className="flex h-[calc(100vh-6rem)] flex-col items-center justify-center overflow-hidden">
      <h1 className="z-0 translate-y-6 text-[8rem] font-bold sm:text-[20rem]">
        <span className="z-20">4</span>
        <span className="-z-20">0</span>
        <span className="z-20">4</span>
      </h1>

      <h3 className="text-[2rem] font-bold uppercase sm:text-[4rem]">
        PAGE NOT FOUND
      </h3>

      <div className="absolute z-20 flex h-full w-full scale-50 items-center justify-center sm:scale-100">
        <motion.div
          initial={{ x: -500, y: -500, z: -100, scale: 0 }}
          animate={{
            x: 0,
            y: -100,
            z: 100,
            scale: 1,
            rotateZ: -22.5,
          }}
          transition={{ duration: 2, ease: cubicBezier(1, 0.15, 0, 0.34) }}
          className="relative"
        >
          <div className="absolute left-1/2 -z-[10]  h-3 w-56 -translate-x-1/2 rounded-full bg-white blur-2xl" />
          <div className="z-0 flex h-16 w-80 justify-center rounded-[50%] bg-gradient-to-r from-[#6660a9] to-[#42339E]">
            <div className="absolute -z-[1] h-[5rem] w-40 -translate-y-7 rounded-[50%] bg-gradient-to-r from-[#6660a9] to-[#42339E]" />
            <div className="absolute -z-[1] h-10 w-44 -translate-y-4 animate-pulse rounded-[50%] border-2 border-t-[#18E1E8] bg-gradient-to-r from-[#6660a9] to-[#42339E]" />
            <div className="absolute -z-[1] h-11 w-60 -translate-y-2 rounded-[50%] border-t-2 border-[#a7bcff] bg-gradient-to-r from-[#6660a9] to-[#42339E]" />
            <div className="z-10 flex h-11 w-80 translate-y-[30%] items-end justify-center rounded-[50%] bg-[#2E2871] bg-gradient-to-r from-[#817aff] via-[#645EA9] to-[#15B2FD]">
              <div className="border-t-[3px flex h-10 w-80 items-end justify-center rounded-[50%] bg-[#2E2871]">
                <div className="relative flex h-9 w-72 translate-y-1 justify-center rounded-[50%] bg-black">
                  <span className="absolute left-[5%] top-[6px] h-[2px] w-[2px] animate-ping rounded-full bg-[#FE0000]" />
                  <span className="absolute -top-[1.5px] left-[20%] h-[3px] w-[3px] animate-pulse rounded-full bg-[#FDFE02]" />
                  <span className="absolute -top-[4.5px] left-1/3 h-[4px] w-[4px] animate-pulse rounded-full bg-[#74ee15]" />
                  <span className="absolute -top-[5px] left-1/2 h-[4px] w-[4px] rounded-full bg-white" />
                  <span className="absolute -top-[4.5px] right-1/3 h-[4px] w-[4px] animate-pulse rounded-full bg-white" />
                  <span className="absolute -top-[1.5px] right-[20%] h-[3px] w-[3px] animate-ping rounded-full bg-[#FDFE02]" />
                  <span className="absolute right-[5%] top-[6px] h-[2px] w-[2px] animate-ping rounded-full bg-[#FE0000]" />
                  <div
                    className="flex h-7 w-[17.5rem] translate-y-[5px] items-end justify-center rounded-[50%]"
                    style={{
                      background: 'linear-gradient(#1a163f 10%, #2E2871 70%)',
                    }}
                  >
                    <div className="flex h-7 w-[10rem] translate-y-1 animate-pulse justify-center rounded-[50%] bg-[#18E1E8]">
                      <div className="flex h-6 w-[9.3rem] translate-y-[3px] justify-center rounded-[50%] bg-[#2E2871]">
                        <div className="flex h-3 w-[7.5rem] translate-y-2 justify-center rounded-[50%] bg-[#18E1E8]">
                          <div className="relative h-2 w-[6rem] translate-y-0 rounded-[50%] bg-white">
                            <div className="absolute -top-7 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-white opacity-60 blur-xl" />
                            <div className="absolute left-1/2 top-4 h-32 w-28 -translate-x-1/2 animate-pulse bg-gradient-to-b from-white to-yellow-400 opacity-50 blur-2xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
