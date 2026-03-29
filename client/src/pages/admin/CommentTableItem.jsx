import React from 'react'
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const CommentTableItem = ({ comment, fetchComments }) => {

    const { blog, createdAt, _id } = comment;
    const BlogDate = new Date(createdAt);

    //action button  , switch-approved or not comment added functionality
    const { axios } = useAppContext()
    const approveComment = async () => {
        try {
            const { data } = await axios.post('/approve-comment', { id: _id })
            if (data.success) {
                toast.success(data.message)
                await fetchComments(); //refresh these table 
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)

        }
    }
    //action button delete comment added functionality

    const deleteComment = async () => {
        try {
            const confirm = window.confirm('Are you sure you want to delete this comment ?');
            if (!confirm) return;

            const { data } = await axios.post('/delete-comment', { id: _id })
            if (data.success) {
                toast.success(data.message)
                fetchComments(); //refresh these table 
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)

        }
    }

    return (
        <tr className='order-y border-gray-300'>
            <td className='px-6 py-4'>
                <b className='font-medium text-gray-600'>Blog</b>:{blog.title}
                <br /> <br />
                <b className='font-medium text-gray-600'>Name</b>:{comment.name}
                <br />
                <b className='font-medium text-gray-600'>Comment</b>:{comment.content}
                <br /> <br />
            </td>
            <td className='px-6 py-4 max-sm:hidden'>
                {BlogDate.toLocaleDateString()}
            </td>
            <td className='px-6 py-4 '>
                <div className='inline-flex items-center gap-4 '>
                    {!comment.isApproved ?
                        <img onClick={() => approveComment()} src={assets.tick_icon} className='w-5 hover:scale-110 transition-all cursor-pointer' /> : <p className='text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1'>Approved</p>}   </div>
                <img onClick={() => deleteComment()} src={assets.bin_icon} alt="" className='w-5 hover:scale-110 transition-all cursor-pointer' />

            </td>
        </tr>
    )
}

export default CommentTableItem