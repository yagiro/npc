// add option to chosen filters
export const buildChosenFiltersOnAdd = (option, chosenFilters) => {

	//we get filter or create new one with empty Set
	const filter = chosenFilters[option.filterId] || { filterId: option.filterId, value: new Set([]) };

	const prevOptions = [ ...filter.value ];
	const updatedOptions = [ ...prevOptions, option.value ];
	return {
		...chosenFilters,
		[option.filterId]: {
			...filter,
			value: new Set([ ...updatedOptions ])
		}
	};
};

// remove option from chosen filters
export const buildChosenFiltersOnRemove = (option, chosenFilters, valueForRemoving) => {
	const filter = chosenFilters[option.filterId];
	const prevOptions = [ ...filter.value ];
	const updatedOptions = prevOptions.filter((filterOption) => {

		// for comboFilter
		if(valueForRemoving) {
			return filterOption !== valueForRemoving;
		}

		// for multipleOptions Filter
		return filterOption !== option.value;
	});
	return {
		...chosenFilters,
		[filter.filterId]: {
			...filter,
			value: new Set([ ...updatedOptions ])
		}
	};
};

export const buildFilterOptionObject = (filters) => {

	let filterOptionsObject = {};

	filters.forEach((filter)=> {

		// for multipleOptions Filter
		if (filter.data.options) {
			filter.data.options.forEach((option)=> {
				filterOptionsObject = { ...filterOptionsObject, [option.value] : option };
			});
		}

		// for comboFilter
		if (filter.data.dropdownFilter) {
			filter.data.dropdownFilter.options.forEach((dropdownOption)=> {
				const dropdownValue = dropdownOption.value;

				filter.data.multipleOptionsFilter.options.forEach((option)=> {
					const dropdownUpgradedOption = {
						value: `${dropdownValue}${option.value}`,
						label: `${dropdownOption.label} ${option.label}`,
						filterId: filter.id,
						valueForRemoving: option.value,
					};

					filterOptionsObject = { ...filterOptionsObject, [`${dropdownValue}${option.value}`] : dropdownUpgradedOption };
				});
				
			});
		}

	});

	return filterOptionsObject;
};
