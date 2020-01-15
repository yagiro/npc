import React from 'react';
import styled from 'styled-components';
import Title from '../gereric/Title';
import Checkbox from '../gereric/Checkbox';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TopSection = styled.div`
  display: flex;
`;

const FiltersSections = styled.div`
  display: flex;
  width: 100%;
`;

const SubTitle = styled.div`
  display: flex;
`;

const ChosenFiltersSection = styled.div`
  display: flex;
  align-items: center;
`;

class NetworkSecurityFilter extends React.Component {

	state = {
		chosenFilters: [
			{ value: '15gbps', label: '1-5 Gbps' },
			{ value: '3u', label: '3 U' },
		],
	};

	// function makes check if value of some option there is in chosenFilters
	isChecked = (chosenFilters, value) => {
		const filter = chosenFilters.find((chosenFilter)=> {
			return chosenFilter.value === value;
		});
		
		return !!filter;
	};

	// function render block of filter-options for specific filter-type
	renderFilterBlock = (filters) => {
		// render filter-blocks
		return filters.map(({ id, title, options }) => {
			return (
				<div key={ id }>
					<p>{ title }</p>
					{/*// render list of filter-options*/}
					<div>
						{options.map((option) => {
							const checked = this.isChecked(this.state.chosenFilters, option.value);

							// our onChange depends on "checked":
							// if filter-option checked we need to remove option by click
							// if filter-option unchecked we need to add filter option
							const onChange = checked ? this.onRemoveFilterOption : this.onAddFilterOption;
							
							// render one filter-option
							return (
								<div key={ option.value }>
									<Checkbox label={ option.label } isChecked={ checked } onChange={ () => {onChange(option);} }/>
								</div>
							);
						})}
					</div>
				</div>
			);
		});
	};

	// render chosen filters in the Top Section
	renderChosenFilters = (chosenFilters) => {
		return chosenFilters.map((chosenFilter)=> {
			return (
				<div key={ chosenFilter.value } onClick={()=> {this.onRemoveFilterOption(chosenFilter);}}>{ `_ ${chosenFilter.label}_` }</div>
			);
		});
	};
	
	// clear filters click handler
	onClearFiltersClick = () => {
		this.setState({ chosenFilters: [] });
	};

	// add filter-option click handler
	onAddFilterOption = (option) => {
		this.setState((prevState) => {
			return {
				...prevState, chosenFilters: [ ...prevState.chosenFilters, option ]
			};
		});
	};

	// remove filter-option click handler
	onRemoveFilterOption = (option) => {
		this.setState((prevState) => {
			const updatedChosenFilters = prevState.chosenFilters.filter((filterOption) => filterOption.value !== option.value);
			return {
				...prevState, chosenFilters: updatedChosenFilters
			};
		});
	};
	

	render() {
		
		const { filters } = this.props;

		return (
			<Container>
				<TopSection>
					<div>
						<Title size="32px">Network Security</Title>
						<SubTitle>
							Displaying 400 Security Gateway Appliance & Solutions
						</SubTitle>
					</div>
					<ChosenFiltersSection>
						{ this.renderChosenFilters(this.state.chosenFilters) }
						<div onClick={ this.onClearFiltersClick }>*Clear all*</div>
					</ChosenFiltersSection>
				</TopSection>
				<FiltersSections>
					{ this.renderFilterBlock(filters) }
				</FiltersSections>
			</Container>
		);
	}
}


export default NetworkSecurityFilter;


/*
filters: [
{
	type: 'marketSegment',
	options: [ { value, label } ],
},
],
onChange: (updatedFilters) => [ { type, selectedOptions } ]
 */
