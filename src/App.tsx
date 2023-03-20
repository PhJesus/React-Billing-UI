import capybara from './assets/capybara17.jpg'
import { CiSquarePlus, CiLock, CiMail, CiMoneyBill, CiSquareMore, CiLogout } from 'react-icons/ci';

function App() {

  return (
    <>
      <div className="mt-[50px] p-10 max-w-7xl mx-auto bg-white rounded-xl shadow-lg">
        <div className="grid grid-cols-sidebar gap-4">
          <section>
            <div className='flex flex-row items-center'>
              <img className='w-[55px] h-[55px] rounded-xl shadow-xl' src={capybara} alt="capybara" />
              <div>
                <p className='ml-2 text-[#1A194D] font-extrabold'>Capybara</p>
                <p className='ml-2 text-xs text-[#62618F]'>@capybara</p>
              </div>
            </div>
            <div className='grid mt-10'>
              <div className="flex flex-row items-center">
                <i className='ml-[10px] text-[#62618F]'><CiSquarePlus size={'32px'}/></i>
                <p className='ml-[10px] text-[#62618F]'>General</p>
              </div>
              <div className="flex flex-row items-center">
                <i className='ml-[10px] text-[#62618F]'><CiLock size={'32px'}/></i>
                <p className='ml-[10px] text-[#62618F]'>Password</p>
              </div>
              <div className="flex flex-row items-center">
                <i className='ml-[10px] text-[#62618F]'><CiMail size={'32px'}/></i>
                <p className='ml-[10px] text-[#62618F]'>Invitations</p>
              </div>
              <div className="flex flex-row items-center">
                <i className='ml-[10px] text-[#62618F]'><CiMoneyBill size={'32px'}/></i>
                <p className='ml-[10px] text-[#62618F]'>Billing</p>
              </div>
              <div className="flex flex-row items-center">
                <i className='ml-[10px] text-[#62618F]'><CiSquareMore size={'32px'}/></i>
                <p className='ml-[10px] text-[#62618F]'>Apps</p>
              </div>
            </div>
            <div className='flex flex-row items-center mt-60'>
              <i className='ml-[10px] text-[#62618F]'><CiLogout size={'32px'}/></i>
              <p className='ml-[10px] text-[#62618F]'>Logout</p>
            </div>
          </section>
          <section>
            <div className='flex flex-col'>
              <h1 className='font-bold text-xl text-[#1A194D] mt-[10px] mb-10'>Billing</h1>
              <div>
                <h1 className='font-bold text-[#1A194D]'>Order History</h1>
                <p className='text-xs text-[#62618F]'>Manage billing information and view receipts</p>
              </div>
              <div className="grid grid-cols-3 auto-rows-auto mt-[50px]">
                  <p className='text-sm text-[#62618F]'>Date</p>
                  <p className='text-sm text-[#62618F]'>Type</p>
                  <p className='text-sm text-[#62618F]'>Receipt</p>
                  <p className='flex items-center text-[#1A194D] font-bold'>Oct. 21, 2021</p>
                  <p className='flex items-center text-[#1A194D] font-bold'>Pro Annual</p>
                  <button className='text-[#1A194D] font-bold border-2 rounded-xl py-1 px-2 max-w-[140px] mt-2'>Download</button>
                  <p className='flex items-center text-[#1A194D] font-bold'>Aug. 21, 2021</p>
                  <p className='flex items-center text-[#1A194D] font-bold'>Pro Portfolio</p>
                  <button className='text-[#1A194D] font-bold border-2 rounded-xl py-1 px-2 max-w-[140px] mt-2'>Download</button>
                  <p className='flex items-center text-[#1A194D] font-bold'>July. 21, 2021</p>
                  <p className='flex items-center text-[#1A194D] font-bold'>Sponsored Post</p>
                  <button className='text-[#1A194D] font-bold border-2 rounded-xl py-1 px-2 max-w-[140px] mt-2'>Download</button>
                  <p className='flex items-center text-[#1A194D] font-bold'>Jun. 21, 2021</p>
                  <p className='flex items-center text-[#1A194D] font-bold'>Sponsored Post</p>
                  <button className='text-[#1A194D] font-bold border-2 rounded-xl py-1 px-2 max-w-[140px] mt-2'>Download</button>
                  <p className='underline text-red-500'>Load More</p>
              </div>
              <div>
                <h1 className='font-bold text-[#1A194D] mt-[50px]'>Payment Method</h1>
                <p className='text-xs text-[#62618F]'>Manage billing information and view receipts</p>
              </div>
              <div className='flex flex-row mt-[10px] items-center'>
                <div className='grow-0 border-2 rounded-lg px-4 py-1'>
                  VISA
                </div>
                <div className='grow ml-[15px] font-medium'>
                  Visa Endind in 2255
                </div>
                <div className='grow-0'>
                <button className='text-[#1A194D] font-medium border-2 rounded-xl py-1 px-2 max-w-[140px] mt-2'>Remove</button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='mt-[100px] text-white bg-red-500 w-[200px] h-[200px] flex flex-col justify-center rounded-xl'>
              <div className='m-auto'>
                <p className='text-sm'>Your plan</p>
                <h1 className='text-xl mt-[10px] mb-[10px] font-bold'>Pro Annual</h1>
                <p className='text-sm mb-[10px]'>Renews on Nov. 2021</p>
                <button className='border-[1px] rounded-xl py-1 px-1'>Cancel Subscription</button>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className='w-[200px] h-[680px] bg-red-500 absolute top-[20px] left-[280px] -z-50 shadow-lg rounded-3xl'> </div>
    </>
    
    
  )
}

export default App
