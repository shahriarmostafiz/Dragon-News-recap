import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Newscard = ({ news }) => {
    const { _id, title, image_url, thumbnail_url, details } = news
    return (
        <div className='card bg-base-100 shadow-xl mb-12'>
            <figure>
                <div>
                    <img src={image_url} alt="" />
                </div>
            </figure>
            <div className="card-body">
                <h1 className="text-3xl font-semibold">
                    {title}
                </h1>

                {details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className='text-blue-600'>Read More </Link></p> :
                    <p>{details}</p>
                }

            </div>

        </div>
    );
};

export default Newscard;
Newscard.propTypes = {
    news: PropTypes.object
}