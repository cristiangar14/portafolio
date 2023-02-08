import { dataExperiences } from '../mocks/experience.mocks';
import { dataPortfolio } from '../mocks/portfolio.mocks';

// eslint-disable-next-line import/prefer-default-export
export const getExperienceDetail = (id) => (
    dataExperiences.find(
        // eslint-disable-next-line eqeqeq
        (experience) => experience.id == id,
    )
);

export const getPortfolio = (category) => (
    dataPortfolio.filter(
        // eslint-disable-next-line eqeqeq
        (experience) => experience.category == category,
    )
);

export const getPortfolioDetail = (id) => (
    dataPortfolio.find(
        // eslint-disable-next-line eqeqeq
        (experience) => experience.id == id,
    )
);
