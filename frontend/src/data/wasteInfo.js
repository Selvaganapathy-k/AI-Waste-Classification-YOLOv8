export const wasteInfo = {

    Recyclable: {

        title: "♻ Recyclable Waste",

        recommendation:
            "This waste can be recycled and converted into new products. Please dispose of it in a designated recycling bin.",

        steps: [

            "Clean the item before recycling.",

            "Separate it from organic waste.",

            "Place it in the blue recycling bin.",

            "Avoid mixing with food-contaminated materials."

        ],

        impact: {

            co2: "Reduces CO₂ emissions by approximately 2.4 kg.",

            energy: "Saves up to 18% manufacturing energy.",

            environment:
                "Reduces landfill waste and conserves natural resources."

        }

    },



    Organic: {

        title: "🌱 Organic Waste",

        recommendation:
            "Organic waste is biodegradable and can be converted into compost or bio-fertilizer.",

        steps: [

            "Collect separately from recyclable waste.",

            "Place in a compost bin.",

            "Use as natural fertilizer after composting.",

            "Do not mix with plastics."

        ],

        impact: {

            co2: "Reduces methane emissions from landfills.",

            energy: "Produces nutrient-rich compost naturally.",

            environment:
                "Improves soil fertility and supports sustainable agriculture."

        }

    },



    Hazardous: {

        title: "⚠ Hazardous Waste",

        recommendation:
            "Hazardous waste contains harmful chemicals and should be handled carefully.",

        steps: [

            "Do not throw it into household garbage.",

            "Do not burn or bury the waste.",

            "Take it to an authorized hazardous waste collection center.",

            "Keep away from children and pets."

        ],

        impact: {

            co2: "Prevents harmful toxic emissions.",

            energy: "Protects ecosystems from chemical contamination.",

            environment:
                "Prevents soil and groundwater pollution."

        }

    }

};