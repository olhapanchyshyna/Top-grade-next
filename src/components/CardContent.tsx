import Line from './Line'

type ItemProps = {
	id: number;
	title: string;
	description: string;
}
type CardContentProps = {
	item: ItemProps
}

export default function CardContent({item}: CardContentProps) {
	return (
		<>
			<div className='text-lg lg:text-xl font-semibold mb-[16px] max-w-[342px]'>
				{item.title}
			</div>
			<Line className='w-[250px] xl:w-[359px] h-[3px]'/>
			<div className='text-sm lg:text-base font-normal mt-[16px] max-w-[385px]'>
				{item.description}
			</div>
		</>
	)
}