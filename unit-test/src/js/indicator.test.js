import showIndicator from '../indicator';
test.each([{
            name: 'Лучник',
            health: 100,
            expected: 'healthy'
        },

        {
            name: 'Маг',
            health: 39,
            expected: 'wounded'
        },
        {
            name: 'Тролль',
            health: 12,
            expected: 'critical'
        },
        {
            name: 'Всадник',
            expected: 'oops something goes wrong'
        },
        {
            name: 'Пастух',
            health: 'ого-го',
            expected: 'oops something goes wrong'
        },

    ])
    ('test',
        ({ name, health, expected }) => {
            const condition = healthStatus(({ name, health, expected }));
            expect(expected).toBe(condition);
        });