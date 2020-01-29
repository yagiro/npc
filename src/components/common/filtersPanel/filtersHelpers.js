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
export const buildChosenFiltersOnRemove = (option, chosenFilters) => {
	const filter = chosenFilters[option.filterId];
	const prevOptions = [ ...filter.value ];
	const updatedOptions = prevOptions.filter((filterOption) => filterOption !== option.value);
	return {
		...chosenFilters,
		[filter.filterId]: {
			...filter,
			value: new Set([ ...updatedOptions ])
		}
	};
};

// build object where [key] it's option-value and [value] it's option
export const buildFilterOptionObject = (filters) => {

	let filterOptionsObject = {};

	filters.forEach((filter)=> {

		filter.innerFilters.multipleOptionsFilter.options.forEach((option)=> {
			filterOptionsObject = { ...filterOptionsObject, [option.value] : option };
		});
	});

	return filterOptionsObject;
};
