import React, { useContext } from 'react'
import { Left, MainSection, Right, SectionWrap, Title, ImageWrap, Img, Toptitle, EmiContent } from './IndexElement'
import Button from '@/Components/Button'
import { BookingContext, DownloadContext } from '@/Context'



const Index = ({ id, title, titleColor, topTitle, heading, content, subContent, btnValue, imageRight, imgUrl }) => {
    const { setDownloadPop } = useContext(DownloadContext);
    const { setBooking } = useContext(BookingContext);
    return (
        <SectionWrap id={id} >
            <Toptitle topTitle={topTitle}>{title}</Toptitle>
            <MainSection imageRight={imageRight} >
                <Left>
                    <ImageWrap>
                        <Img src={imgUrl} alt='image' />
                        <EmiContent id={id}>
                            {/* content p  */}
                            {content}
                            {/* Sub Content h2 */}
                            {subContent}
                        </EmiContent>
                    </ImageWrap>
                </Left>
                <Right id={id} titleColor={titleColor}>
                    <Title topTitle={topTitle} >{title}</Title>
                    {/* heading H1 */}
                    <div>
                        <div>{heading}</div>
                        {/* content p  */}
                        {content}
                        {/* Sub Content h2 */}
                        {subContent}
                        {btnValue != '' && id != 'download' ? <div onClick={() => setBooking(true)} ><Button value={btnValue} color={id === 'download' ? '#000' : '#fff'} /></div> : ''}
                        {btnValue != '' && id === 'download' ? <div onClick={() => setDownloadPop(true)} ><Button value={btnValue} color='#000' /></div> : ''}
                    </div>
                </Right>
            </MainSection>
        </SectionWrap>
    )
}

export default Index