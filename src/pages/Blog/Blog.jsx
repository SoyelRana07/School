import React from 'react';
import './Blog.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';
import Blog4Img from '../../utils/images/blog4-img.jpg';
import Blog5Img from '../../utils/images/blog5-img.jpg';
import Blog6Img from '../../utils/images/blog6-img.jpg';
import Blog7Img from '../../utils/images/blog7-img.jpg';
import Blog8Img from '../../utils/images/blog8-img.jpg';
import Blog9Img from '../../utils/images/blog9-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Shloka Chanting',
        description: 'The Heritage School students were felicitated on 7th January for their performance in the Geeta Shloka Chanting Competition. The prize distribution ceremony was held at the Jyotirmaya Club, Kolkata.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Ramp Walk',
        description: 'In a groundbreaking collaboration, Global Threads (a student -run initiative of The Heritage School) teamed up with THS GIRL UP (an initiative of the United Nations Foundation )to make a meaningful impact through sustainable fashion.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Yogasana',
        description: 'Glimpses of the inaugural session of 67th National School Games in Yogasana hosted by our School organized by CISCE & SGFI....'
    },
    {
        id: 4,
        img: [Blog4Img],
        title: 'International collaboration',
        description: 'The Consul General of the People Republic of China held an exhibition of paintings by The Heritage School students on the "Silk Route." This exhibition was held on 16th January at St. Joans School Salt Lake, which saw an active participation of the students and parents from classes I to 11.'
    },
    {
        id: 5,
        img: [Blog5Img],
        title: 'Book exchange program',
        description: 'Shelf Back, the Heritage School Book Club, in collaboration with the students of Class 6, organised a "Secret Santa." Old books were exchanged and gifted anonymously among the students, and the Senior School Library was decorated with posters, ribbons, and a bookshelf "Christmas Tree."'
    },
    {
        id: 6,
        img: [Blog6Img],
        title: 'Classical Dance',
        description: 'The Heritage School teachers took part in a special program dedicated to the great poet, writer, playwright, composer, philosopher, social reformer and painter, Rabindranath Tagore.'
    },
    {
        id: 7,
        img: [Blog7Img],
        title: 'Workshop',
        description: 'The Heritage School students of classes 6 & 7 attended an enriching workshop named "Sustainable Tales: A Storytelling Competition". It was held at Science City on 8th March, and was organized by Switch on Foundation.'
    },
    {
        id: 8,
        img: [Blog8Img],
        title: 'Wall Painting',
        description: 'The Heritage School students of IBDP 2 painted the walls of Suryakiran, an evening school for underprivileged children, that was started in 2006 by the Kalyan Bharti Trust.'
    },
    {
        id: 9,
        img: [Blog9Img],
        title: 'Award ceremony',
        description: 'Apratim Gangopadhyay, a student of The Heritage School received the ICSE Topper Award and Manya Gupta who topped the Country in ISC Exam 2023 received the ISC Topper Award at the 11th LIONS Gurukul Award 2023 organized by the LIONS International District 322B2 today at Kolkata'
    },
];

function Blog() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Beyond Academics</h1>
                <p className='text-center w-75 mb-5'>At The Heritage School, a lot of emphasis is laid on the complete development of the body, mind and spirit. Students are exposed to various activities which they choose according to their choice and interest.</p>
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='col-md-6 col-lg-4'>
                            <Link to="/blog" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={blog.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{blog.title}</Card.Title>
                                        <Card.Text className='text-center'>{blog.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog;