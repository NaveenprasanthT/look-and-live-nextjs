import React from 'react'
import { Left, MainSection, Right, SectionWrap, Title, ImageWrap, Img, Toptitle, EmiContent } from './IndexElement'
import Button from '@/Components/Button'



const Index = ({ id, title, titleColor, topTitle, heading, content, subContent, btnValue, imageRight, imgUrl }) => {
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
                    <div>{heading}</div>
                    {/* content p  */}
                    {content}
                    {/* Sub Content h2 */}
                    {subContent}
                    {btnValue != '' ? <Button value={btnValue} color={id==='download' ? '#000' : '#fff'} /> : ''}
                </Right>
            </MainSection>
        </SectionWrap>
    )
}

export default Index