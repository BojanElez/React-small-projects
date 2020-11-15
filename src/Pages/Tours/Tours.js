import React  from 'react';
import Tour from './Tour';
import Title from '../../Components/Title/Title';

const Tours = ({tours, removeTour}) => {
  return (
      <section>
          <Title title="Out Tours" />
          <div>
                {tours.map((tour)=> {
                    return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
                })}
            </div>
      </section>
  );
};

export default Tours;