import { dataExperiences } from '../mocks/experience.mocks';

// eslint-disable-next-line import/prefer-default-export
export const getExperienceDetail = (id) => (
    dataExperiences.find(
        // eslint-disable-next-line eqeqeq
        (experience) => experience.id == id,
)
    );
