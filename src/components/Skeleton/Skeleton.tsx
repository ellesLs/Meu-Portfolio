import * as S from './Skeleton.styles';

export function Skeleton() {
  return (
    <S.RootSkeleton>
      <S.TittleSkeleton />
      <S.ImageSkeleton />
      <S.TextSkeleton>
        <div></div>
        <div></div>
        <div></div>
      </S.TextSkeleton>
      <S.ButtonsSkeleton>
        <div></div>
        <div></div>
      </S.ButtonsSkeleton>
    </S.RootSkeleton>
  );
}
