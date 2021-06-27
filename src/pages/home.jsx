import React, { useEffect } from 'react';

import './home.scss';

//components
import ProfileCard from '../components/profileCard';
import Loading from '../components/loading';

//services
import { getCompanyEmpyloyees } from '../services/queries';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setEmployees } from '../redux/employees/actions';

//hooks 
import { useBackButton } from '../hooks';

const Home = () => {
    const { employeesList, loading } = useSelector(state => state.employees);
    const dispatch = useDispatch();

    useBackButton({ visibility: false });

    useEffect(() => {
        if (employeesList.length === 0) {
            getCompanyEmpyloyees()
                .then(response => {
                    const { employees } = response.data.company;

                    dispatch(setEmployees(employees));
                })
                .catch(() => {
                    alert('Bir Sorun Oluştu');
                });
        }
    }, []);

    return (
        <div className="homePage">
            {
                !loading ? employeesList.map((item, index) => (
                    <ProfileCard
                        key={`profileCard-${index}`}
                        avatar={item.avatar}
                        id={item.id}
                        email={item.email}
                        firstName={item.firstName}
                        lastName={item.lastName}
                        vote={item.vote}
                        jobTitle={item.jobTitle}
                    />
                )) : <Loading />
            }
        </div>
    );
}

export default Home;
