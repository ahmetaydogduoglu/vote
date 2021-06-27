import React, { useEffect } from 'react'

//styles
import './profile.scss';

//components
import Loading from '../components/loading';

//services
import { getCompanyEmpyloyeeDetail } from '../services/queries';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setEmployee } from '../redux/employeeDetail/actions';

//hooks 
import { useBackButton } from '../hooks';

const Profile = ({ match }) => {
    const { employee, loading } = useSelector(state => state.employeeDetail);
    const dispatch = useDispatch();
    useBackButton({ visibility: true });

    useEffect(() => {
        getCompanyEmpyloyeeDetail(match.params.id)
            .then(response => {
                dispatch(setEmployee(response.data.employee));
            })
            .catch(() => {
                alert('Bir Sorun Oluştu');
            });
    }, []);

    return (
        <div className="profilePage">
            {
                !loading ?
                    <div className="profilePage-container">
                        <img className="profilePage-avatar" src={employee.avatar} width={200} height={200} avatar="avatar" />
                        <div className="profilePage-content">
                            <span className="profilePage-text">Name: {employee.firstName} {employee.lastName}</span>
                            <span className="profilePage-text">Title: {employee.jobitle}</span>
                            <span className="profilePage-text">Email: {employee.email}</span>
                            <span className="profilePage-text">Address: {employee.address}</span>
                        </div>
                    </div>
                    :
                    <Loading />
            }
        </div>
    );
}
export default Profile
