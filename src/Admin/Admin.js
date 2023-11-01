import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from "axios"
import "./Admin.css"

function Admin() {
    const [tank, setTank] = useState([
        { id: "1", value: "Full stack Developer" },
        { id: "2", value: "Frontend" },
        { id: "3", value: "Backend" },
        { id: "4", value: "UI design" },
        { id: "5", value: "UX design" }
    ])
    const [oneTank, setOneTank] = useState([])


    function handleOne(e) {
        if (e.target.checked === true) {

            setOneTank([...oneTank,
            e.target.value
            ])
        }
        else {
            setOneTank(oneTank.filter((list) => {
                return list !== e.target.value
            }))
        }

    }

    console.log(oneTank)



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    function onSubmit(data) {
        console.log(data);

        axios.post('http://localhost:8080/admin', { ...data, oneTank },
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            })
            .then((result) => {
                if (result.status === 200) {
                    console.log(result.data)
                }
                else if (result.status === 202) {
                    alert(result.data)
                }
            });
    }
    return (
        <>
            <section className='admin'>
                <form onSubmit={handleSubmit(onSubmit)} encType='multipart/form-data '>
                    <lebal>Full Name</lebal>
                    <input
                        {
                        ...register('fullname', { required: true, })}
                        placeholder='Enter Full Name' type='text'></input>

                    {errors.fullname && <p role="alert">Fullname is required</p>}


                    <lebal >Profile Pic</lebal>
                    <input placeholder='Enter Linkedin Link' type='file'{
                        ...register('profilePic', { required: true, })}></input>{errors.profilePic && <p role="alert">profilePic is required</p>}


                    {/* <lebal>Select feild</lebal>
                    <ul style={{ listStyle: "none" }}


                    >
                        {
                            tank.map((list, index) => {
                                return <li key={index}>
                                    <input type='checkbox' value={list.value} id={list.id} onChange={handleOne} />{list.value}
                                </li>
                            })
                        }
                    </ul>





                    <lebal>Email</lebal>
                    <input placeholder=' Enter email' type="email" {
                        ...register('email', {
                            required: true,
                            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                            minLength: 8,
                            maxLength: 60,
                        })}></input>{errors.email && <p role="alert">email is required</p>}

                    <lebal>mobile</lebal>
                    <input type='number' placeholder='Enter mobile number'{
                        ...register('mobile', { required: true, })}></input>{errors.mobile && <p role="alert">mobile is required</p>}


                    <lebal>Address</lebal>
                    <textarea{
                        ...register('address', { required: true, })}></textarea>{errors.address && <p role="alert">address is required</p>}

                    <lebal >Linkedin</lebal>
                    <input placeholder='Enter Linkedin Link' type='text'{
                        ...register('linkedin', {
                            required: true,
                            pattern: /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/,

                        })}></input>{errors.linkedin && <p role="alert">linkedin is required</p>}

                    <lebal >Github</lebal>
                    <input placeholder=' Enter Github Link' {
                        ...register('github', {
                            required: true,
                            pattern: /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/

                        })}></input>{errors.github && <p role="alert">gitub is required</p>}

                    {/* ...........................Profile(summary)............................. */}

                    {/* <lebal>Enter summary</lebal>
                    <textarea type="text"{
                        ...register('summary', { required: true, })}></textarea>{errors.summary && <p role="alert">summary is required</p>}




                    {/* ..........................Education................................... */}

                    {/* <h2>Education</h2>
                    <h3>Graduation</h3>
                    <lebal>StartYear</lebal>
                    <input {...register('graStartYear', { required: true, })} type='text' placeholder='Enter Graduation  start year'></input>{errors.graStartYear && <p role="alert">Graduation StartYear is required</p>}

                    <lebal>LastYear</lebal>
                    <input {...register('graLastYear', { required: true, })} type='text' placeholder='Enter Graduation  last year'></input>{errors.graLastYear && <p role="alert">Graduation LastYear is required</p>}

                    <lebal>Location</lebal>
                    <input {...register('graLocation', { required: true, })} type='text' placeholder='Enter Location'></input>{errors.graLocation && <p role="alert">Graduation Location is required</p>}

                    <lebal>Degree</lebal>
                    <input {...register('graDegree', { required: true, })} type='text' placeholder='Enter Graduation Degree'></input>{errors.graDegree && <p role="alert">Graduation Degree is required</p>}

                    <lebal>University</lebal>
                    <input {...register('university', { required: true, })} type='text' placeholder='Enter University Name'></input>{errors.university && <p role="alert">Graduation University is required</p>}

                    <lebal>Description</lebal>
                    <input {...register('graDec', { required: true, })} type='text' placeholder='Enter  description'></input>{errors.graDec && <p role="alert">Graduation Description is required</p>}

                    <lebal>Skills</lebal>
                    <input {...register('graSkills', { required: true, })} type='text' placeholder='Enter Skills'></input>{errors.graSkills && <p role="alert">Graduation Skills is required</p>} */}


                    {/* ....................................Intership................................... */}
                    {/* <h2>Intership</h2>
                    <lebal>StartTime</lebal>
                    <input {...register('intStartTime', { required: true, })} type='text' placeholder='Enter  Start time'></input>{errors.intStartTime && <p role="alert">Intership StartTime is required</p>}

                    <lebal>complete Time</lebal>
                    <input {...register('intComplete', { required: true, })} type='text' placeholder='Enter complete time'></input>{errors.intComplete && <p role="alert">Intership complete time is required</p>}

                    <lebal>Location</lebal>
                    <input {...register('intLocation', { required: true, })} type='text' placeholder='Enter Location'></input>{errors.intLocation&& <p role="alert">Intership Location is required</p>}

                    <lebal>Degree</lebal>
                    <input {...register('intDegree', { required: true, })} type='text' placeholder='Enter  Degree'></input>{errors.intDegree && <p role="alert">Intership Degree is required</p>}

                    <lebal>Institute</lebal>
                    <input {...register('institute', { required: true, })} type='text' placeholder='Enter Institute Name'></input>{errors.institute && <p role="alert">Intership Institute is required</p>}

                    <lebal>Description</lebal>
                    <input {...register('intDec', { required: true, })} type='text' placeholder='Enter  description'></input>{errors.intDec && <p role="alert">Intership Description is required</p>}

                    <lebal>Skills</lebal>
                    <input {...register('intSkills', { required: true, })} type='text' placeholder='Enter Skills'></input>{errors.intSkills && <p role="alert">Intership Skills is required</p>} */}
 
                    {/* .....................................Skills................................ */}
                    {/* <h2>Skills</h2>

                    <lebal>Skills</lebal>

                    <input placeholder='Enter Skills'{
                        ...register('skills', { required: true, })}></input>{errors.skills && <p role="alert">skills is required</p>}

                    <h2>Lanuages</h2>
                    <lebal>Lanuages</lebal>
                    <input placeholder='Enter lanuages'{
                        ...register('lanuages', { required: true, })}></input>{errors.lanuages && <p role="alert"> lanuages is required</p>} 
             */}
                   

                    <button type='submit'> submit</button>

                </form>
            </section>
        </>
    )
}

export default Admin